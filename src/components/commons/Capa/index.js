import React from 'react';
import styled from 'styled-components';

const CapaBase = styled.div`
  width: 100%;
  height: 50vh;
`

export default function Capa({ title }) {
  return (
    <CapaBase>
      <h1>{title}</h1>
      <p>Portfolio</p>
    </CapaBase>
  )
}