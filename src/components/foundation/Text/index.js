import React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  strong: css`
    font-weight: ${({ theme }) => theme.weight.bold};
  `,
};

const TextBase = styled.span`
  ${({ theme, variant, size }) => {
    if (theme.typography[variant]) {
      return css`
        font-size: ${theme.typography[variant].size[size]}px;
        font-weight: ${theme.typography[variant].fontWeight};
        line-height: ${theme.typography[variant].lineHeight};
      `;
    }
    return TextStyleVariantsMap[variant];
  }}

  ${propToStyle('textAlign')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('fontWeight')}
  ${propToStyle('display')}
`;

export default function Text({
  tag,
  variant,
  children,
  size,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      size={size}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

/* Validação dos tipos de entrada dos atributos */
Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.number,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
  children: null,
  size: 0,
};
