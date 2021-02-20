import React from 'react';
import styled from 'styled-components';

const CapaBase = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.mainUi.background.light.secondary};
`

export default function Capa({ title }) {
  return (
    <CapaBase>
      <h1>{title}</h1>
      <p>Portfolio</p>
    </CapaBase>
  )
}