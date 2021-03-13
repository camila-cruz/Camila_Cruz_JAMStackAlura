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
  border: 1px solid ${({ theme }) => theme.mainUi.background.light.tertiary};;
  border-radius: 10px;
  padding: 14px 6px;
  margin-top: 4px;
  margin-bottom: 16px;
  outline: 0;

  &:focus {
    box-shadow: 0 0 3pt 1pt ${({ theme }) => theme.mainUi.background.light.tertiary};;
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
  onChange,
}) {
  return (
    <InputWrapper>
      {(textarea
        && (
          <Input
            tag="textarea"
            name={name}
            id={id}
            onChange={onChange}
            rows={10}
            style={{ resize: 'none' }}
          />
        )) || (
          <Input
            placeholder={placeholder}
            name={name}
            id={id}
            type={type}
            onChange={onChange}
          />
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  placeholder: null,
  type: 'text',
  textarea: false,
  onChange: null,
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  textarea: PropTypes.bool,
};
