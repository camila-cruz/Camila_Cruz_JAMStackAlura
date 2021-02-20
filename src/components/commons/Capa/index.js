import React from 'react';
import styled from 'styled-components';

const CapaBase = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.mainUi.background.light.secondary}; */
  color: ${({ theme }) => theme.mainUi.text.light.primary};
  background: ${({ theme }) => theme.mainUi.background.light.secondary} url('/images/yellow-honeycomb.svg');

  & > h1 {
    font-size: ${({ theme }) => theme.typography.h1.size[2]}px;
  }

  & > h3 {
    font-size: ${({ theme }) => theme.typography.h3.size[0]}px;
  }
`

export default function Capa({ title }) {
  return (
    <CapaBase>
      <h1>{title}</h1>
      <h3>Portfolio</h3>
    </CapaBase>
  )
}