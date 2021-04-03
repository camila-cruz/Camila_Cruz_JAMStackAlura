/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

const Input = styled(Text)`
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.mainUi.background.light.tertiary};
  border-radius: 10px;
  padding: 14px 6px;
  margin-top: 4px;
  outline: 0;
  
  ${({ textarea }) => textarea && css`height: 80px;`};
  ${({ isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${({ theme }) => theme.actions.error};
  `};

  &:focus {
    box-shadow: 0 0 3pt 1pt ${({ theme }) => theme.mainUi.background.light.tertiary};
  }
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'inputText',
};

export default function TextField({
  placeholder,
  name,
  id,
  type,
  textarea,
  value,
  error,
  isTouched,
  onChange,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      {(textarea
        && (
          <Input
            tag="textarea"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isFieldInvalid={isFieldInvalid}
            rows={10}
            style={{ resize: 'none' }}
            textarea
            {...props}
          />
        )) || (
          <Input
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            type={type}
            onChange={onChange}
            isFieldInvalid={isFieldInvalid}
            {...props}
          />
      )}
      {isFieldInvalid && (
        <Text
          variant="errorFormText"
          display="block"
          marginTop="4px"
          action="error"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  placeholder: null,
  type: 'text',
  value: '',
  textarea: false,
  onChange: null,
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  textarea: PropTypes.bool,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
