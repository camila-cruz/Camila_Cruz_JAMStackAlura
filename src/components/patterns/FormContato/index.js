/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import TextField from '../../forms/TextField';

const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  /* min-width: 500px;
  max-width: 700px;

  clip-path: polygon(25% 10%, 75% 10%, 100% 50%, 75% 90%, 25% 90%, 0% 50%); */
  background-color: white;
`;

function FormContent() {
  return (
    <form>
      <h2>Envie sua mensagem</h2>

      <div>
        <label htmlFor="name">
          Nome
          <TextField type="text" name="name" id="name" />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          E-mail
          <TextField type="email" name="email" id="email" />
        </label>
      </div>

      <div>
        <label htmlFor="message">
          Mensagem
          <TextField type="text" name="message" id="message" textarea />
        </label>
      </div>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormContato({ props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormWrapper {...props}>
      <FormContent />
    </FormWrapper>
  );
}
