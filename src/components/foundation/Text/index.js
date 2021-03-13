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
  ${({ theme, variant }) => {
    if (theme.typography[variant]) {
      return css`
        font-size: ${theme.typography[variant].size[0]}px;
        font-weight: ${theme.typography[variant].fontWeight};
        line-height: ${theme.typography[variant].lineHeight};
        color: ${theme.typography[variant].color};
      `;
    }
    return TextStyleVariantsMap[variant];
  }}

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
`;

export default function Text({
  tag,
  variant,
  children,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
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
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
  children: null,
};
