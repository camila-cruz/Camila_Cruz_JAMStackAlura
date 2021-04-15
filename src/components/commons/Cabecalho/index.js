import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../foundation/layout/Grid';
import Navbar from './Navbar';
import Logo from './Logo';

const CabecalhoBase = styled.header`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};

  position: -webkit-sticky; /* Safari support */
  position: sticky;
  top: -1px;
  z-index: 999;
`;

export default function Cabecalho() {
  return (
    <CabecalhoBase>
      <Grid.Container
        minWidth={{
          md: '700px',
        }}
        maxWidth={{
          md: '1000px',
        }}
      >
        <Grid.Row
          width="initial"
        >
          <Grid.Col
            value={4}
          >
            <Logo />
          </Grid.Col>
          <Grid.Col
            value={8}
            display="flex"
            justifyContent="flex-end"
          >
            <Navbar />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </CabecalhoBase>
  );
}
