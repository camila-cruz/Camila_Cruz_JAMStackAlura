import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import Text from '../../../foundation/Text';

const links = [
  {
    texto: 'Sobre mim',
    url: '/sobre',
  },
  {
    texto: 'Blog',
    url: '/blog',
  },
  {
    texto: 'Contato',
    url: '/contato',
  }
]

const Navlink = styled.a`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.paragraph.size[1]}px;
  font-weight: ${({ theme }) => theme.weight.bold};
`

const NavbarBase = styled.div`
  min-width: 200px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      min-width: 300px;
      max-width: 350px;
    `
  })}
`

export default function Navbar() {
  return (
    <NavbarBase>
      {links.map((link) => {
        return (
          <Navlink href={link.url} key={link.url}>
            <Text variant="link">{link.texto}</Text>
          </Navlink>
        )
      })}
    </NavbarBase>
  );
}