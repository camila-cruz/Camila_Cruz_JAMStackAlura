import React from 'react';
import styled from 'styled-components';
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

const Navlink = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.paragraph.size[1]}px;
  font-weight: ${({ theme }) => theme.weight.bold};
`

const NavbarBase = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
`

export default function Navbar() {
  return (
    <NavbarBase>
      {links.map((link) => {
        return (
          <Navlink href={link.url} key={link.url}>
            <Text>{link.texto}</Text>
          </Navlink>
        )
      })}
    </NavbarBase>
  );
}