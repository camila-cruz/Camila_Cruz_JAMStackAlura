import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  background-color: ${({ theme }) => theme.mainUi.background.light.tertiary};
`

const FooterIcon = styled.img`
  height: 32px;
  color: ${({ theme }) => theme.mainUi.text.light.tertiary};
  /* Yellow icon */
  filter: invert(79%) sepia(60%) saturate(338%) hue-rotate(350deg) brightness(98%) contrast(94%);
`

export default function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/camila-cruz" target="_blank">
        <FooterIcon src="/images/github.svg" alt="Ícone do GitHub" />
      </a>
    </FooterBase>
  )
}