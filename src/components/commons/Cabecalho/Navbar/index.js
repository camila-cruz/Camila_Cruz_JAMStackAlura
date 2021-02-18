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

`


export default function Navbar() {
  return (
    <>
      {links.map((link) => {
        return (
          <Navlink href={link.url} key={link.url}>
            <Text>{link.texto}</Text>
          </Navlink>
        )
      })}
    </>
  );
}