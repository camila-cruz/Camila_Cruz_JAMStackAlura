import React from 'react';
import styled from 'styled-components';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Card from '../src/components/commons/Card';

import Footer from '../src/components/commons/Footer';
import { SectionTitle } from '../src/components/commons/SectionTitle';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { WrapperProjetos } from '../src/components/foundation/WrapperProjetos';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const cards = [
  {
    title: 'Instalura 1',
    image: 'https://via.placeholder.com/300',
    text: 'Projeto do módulo 1 do Bootcamp JAMStack Alura',
  },
  {
    title: 'Instalura 2',
    image: 'https://via.placeholder.com/300',
    text: 'Projeto do módulo 1 do Bootcamp JAMStack Alura',
  },
  {
    title: 'Instalura 3',
    image: 'https://via.placeholder.com/300',
    text: 'Projeto do módulo 1 do Bootcamp JAMStack Alura',
  },
]

export default function Home() {
  return (
    <Box>
      <Capa title="Camila Cruz"/>
      <Cabecalho />
      <WrapperProjetos>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              value={12}
              display="flex"
              justifyContent="center"
            >
              <SectionTitle>Meus projetos</SectionTitle>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            {cards.map((card) => {
              return (
                <Grid.Col
                  value={{
                    xs: 12,
                    md: 6,
                    lg: 4,
                  }}
                  key={card.title}
                  display="flex"
                  justifyContent="center"
                >
                  <Card title={card.title} image={card.image} text={card.text} />
                </Grid.Col>
              )
            })}
          </Grid.Row>
        </Grid.Container>
      </WrapperProjetos>

      <Footer />
    </Box>
  )
}
