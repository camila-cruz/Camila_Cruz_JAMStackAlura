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

  &:after {    
    position: relative;
    /* background: none repeat scroll 0 0 transparent; */
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