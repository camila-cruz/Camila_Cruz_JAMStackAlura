import React from 'react';
import user from '@testing-library/user-event';
import TextField from '.';
import { render, screen } from '../../../infra/test/testUtils';

describe('<TextField />', () => {
  test('renders a textarea', () => {
    render(
      <TextField
        textarea
        value=""
        placeholder="Deixe uma mensagem"
        name="message"
        id="message"
        onChange={() => {}}
      />,
    );

    const textareaField = screen.getByPlaceholderText('Deixe uma mensagem');
    expect(textareaField).toMatchSnapshot();
  });

  describe('when the field is valid', () => {
    describe('and the user types', () => {
      test('the value should be updated', () => {
        const onSubmitMock = jest.fn();
        const fieldValueMock = 'Jequiti';

        render(
          <TextField
            placeholder="Nome"
            value=""
            name="name"
            id="nome"
            onChange={onSubmitMock}
          />,
        );

        const nameField = screen.getByPlaceholderText(/nome/i);
        user.type(nameField, fieldValueMock);

        expect(onSubmitMock).toHaveBeenCalledTimes(fieldValueMock.length);
      });
    });
  });

  describe('when the field is invalid', () => {
    describe('and untouched', () => {
      test('no errors should be displayed', () => {
        render(
          <TextField
            placeholder="Nome"
            value=""
            name="name"
            id="nome"
            onChange={() => {}}
          />,
        );

        const nameField = screen.getByPlaceholderText(/nome/i);
        expect(nameField).toMatchSnapshot();
      });
    });

    describe('and has been touched', () => {
      test('an error should be displayed below it', () => {
        const fieldValueMock = 'emailaleatorio.com';
        const errorMock = 'O campo e-mail deve ter um valor válido';

        render(
          <TextField
            type="email"
            placeholder="E-mail"
            value={fieldValueMock}
            name="email"
            id="email"
            isTouched
            error={errorMock}
            onChange={() => {}}
          />,
        );

        const emailField = screen.getByPlaceholderText(/e-mail/i);
        expect(emailField).toHaveValue(fieldValueMock);

        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent(errorMock);

        expect(emailField).toMatchSnapshot();
      });
    });
  });
});
