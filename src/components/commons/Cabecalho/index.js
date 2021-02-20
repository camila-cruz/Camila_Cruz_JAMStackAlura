import React from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';


function Logo() {
  return <span>{"<Camila />"}</span>
}

const CabecalhoBase = styled.header`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.mainUi.background.light.secondary};
  color: ${({ theme }) => theme.mainUi.text.light.primary};
`

export default function Cabecalho() {
  return (
    <CabecalhoBase>
      <Logo />
      <Navbar />
    </CabecalhoBase>
  )
}