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
`

export default function Cabecalho() {
  return (
    <CabecalhoBase>
      <Logo />
      <Navbar />
    </CabecalhoBase>
  )
}