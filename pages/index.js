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
    destaque: false,
  },
  {
    title: 'Instalura 2',
    image: 'https://via.placeholder.com/300',
    text: 'Projeto do módulo 1 do Bootcamp JAMStack Alura',
    destaque: false,
  },
  {
    title: 'Instalura 3',
    image: 'https://via.placeholder.com/300',
    text: 'Projeto do módulo 1 do Bootcamp JAMStack Alura',
    destaque: false,
  },
  {
    title: 'Instalura 4',
    image: 'https://conteudo.imguol.com.br/c/noticias/48/2021/02/20/robo-perseverance-quando-estava-pousando-em-marte-visto-do-foguete-que-auxiliou-em-sua-descida-1613825173266_v2_900x506.png',
    text: 'Projeto do módulo 1 do Bootcamp JAMStack Alura em destaque nesse card que ocupa um baita espaço',
    destaque: true,
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
              if (!card.destaque) {
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
                    <Card title={card.title} image={card.image} text={card.text} destaque={card.destaque} />
                  </Grid.Col>
                )
              }
            })}
          </Grid.Row>
          <Grid.Row>
            {cards.map((card) => {
              if (card.destaque) {
                return (
                  <Grid.Col
                    value={12}
                    key={card.title}
                    display="flex"
                    justifyContent="center"
                  >
                    <Card title={card.title} image={card.image} text={card.text} destaque={card.destaque} />
                  </Grid.Col>
                )
              }
            })}
          </Grid.Row>
        </Grid.Container>
      </WrapperProjetos>

      <Footer />
    </Box>
  )
}
