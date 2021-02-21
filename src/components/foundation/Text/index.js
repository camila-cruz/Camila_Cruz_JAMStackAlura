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
    font-weight: ${({ theme }) => theme.weight.bold};

    /* Efeito de hover */
    &:after {    
      position: relative;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      background: ${({ theme }) => theme.mainUi.text.light.primary};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:hover {
      &:after { 
        width: 100%;
        left: 0; 
      }
    }
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