import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '../../foundation/layout/Grid';

const SobreBase = styled.div`
  padding:  ${({ theme }) => theme.spacing[2]}px;
  background-color: ${({ theme }) => theme.mainUi.background.light.tertiary};
  color: ${({ theme }) => theme.mainUi.text.dark.primary};
`;

export default function Sobre() {
  return (
    <SobreBase>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12,
              md: 4
            }}
            offset={{
              xs: 0,
              md: 1,
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src="/images/avatar.png" alt="Avatar da Camila" srcset="" style={{ width: '300px'}}/>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 5,
            }}
            offset={{
              xs: 0,
              md: 1,
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{
              xs: 'center',
              md: 'flex-start',
            }}
          >
            <h2>Olá, sou a Camila!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maxime atque dolore sunt, debitis, nulla totam asperiores iste aliquam laboriosam eligendi eius tempora unde, odio esse inventore dicta rerum possimus iusto odit enim dolor. Error possimus beatae quasi unde, tempore non dignissimos ipsum animi sit dolorum cumque dolor. Quam, ipsum!</p>    
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </SobreBase>
  )
}