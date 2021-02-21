import React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  paragraph: css`
    font-size: ${({ theme }) => theme.typography.paragraph.size[0]}px;
    font-weight: ${({ theme }) => theme.weight.light};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight};
  `,
  link: css`
    font-size: ${({ theme }) => theme.typography.paragraph.size[1]}px;
    font-weight: ${({ theme }) => theme.weight.bold};
  `,
  strong: css`
    font-weight: ${({ theme }) => theme.weight.bold};
  `
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propToStyle('textAlign')}
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
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
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
}