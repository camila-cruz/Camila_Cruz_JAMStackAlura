import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Grid } from '../../foundation/layout/Grid';
import Navbar from './Navbar';
import Navigation from 'react-sticky-nav';
import Logo from './Logo';

const NavigationStyle = css`
  position: -webkit-sticky; /* Safari support */
`;

const CabecalhoBase = styled.header`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.mainUi.background.light.secondary};
  color: ${({ theme }) => theme.mainUi.text.light.primary};
`

export default function Cabecalho() {
  return (
    <Navigation style={NavigationStyle}>
      <CabecalhoBase>
        <Grid.Container
          minWidth={{
            md: '700px'
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
    </Navigation>
  )
}