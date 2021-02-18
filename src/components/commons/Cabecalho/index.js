import React from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';


function Logo() {
  return <span>{"<me/>"}</span>
}

const CabecalhoBase = styled.header`

`

export default function Cabecalho() {
  return (
    <CabecalhoBase>
      {/* <Logo /> */}
      <Navbar />
    </CabecalhoBase>
  )
}