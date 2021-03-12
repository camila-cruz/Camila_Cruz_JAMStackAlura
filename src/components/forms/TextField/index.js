import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const InputWrapper = styled.div`
  ${breakpointsMedia({
    xs: css`
      margin-bottom: 16px;
    `,
    md: css`
      margin-bottom: 32px;
    `,
  })}
`;

const Input = styled(Text)`
  width: 100%;
  height: 48px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 14px 6px;
  outline: 0;
  &:focus {
    box-shadow: 0 0 3pt 2pt black;
  }
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'inputText',
};

export default function TextField({
  placeholder,
  id,
  type,
  textarea,
  onChange,
}) {
  return (
    <InputWrapper>
      <Input
        tag={textarea ? 'textarea' : undefined}
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  placeholder: '',
  type: 'text',
  textarea: null,
  onChange: null,
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  textarea: PropTypes.string,
};
