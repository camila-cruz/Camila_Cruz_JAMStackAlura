import React from 'react';
import styled from 'styled-components';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Card from '../src/components/commons/Card';

import Footer from '../src/components/commons/Footer';
import { SectionTitle } from '../src/components/commons/SectionTitle';
import Sobre from '../src/components/commons/Sobre';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { WrapperProjetos } from '../src/components/foundation/WrapperProjetos';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const cards = [
  {
    title: 'The Blacklist: The List',
    image: '/images/projetos/the-blacklist.png',
    text: 'A lista da série The Blacklist.',
    link: 'https://github.com/camila-cruz/the-blacklist',
    destaque: false,
  },
  {
    title: 'Sistema SOS Nova Vida',
    image: '/images/projetos/sos-nova-vida.png',
    text: 'Sistema integrado com website para a SOS Nova Vida.',
    link: 'https://github.com/camila-cruz/sos-nova-vida',
    destaque: false,
  },
  {
    title: 'Anagram Board',
    image: '/images/projetos/anagram-board.png',
    text: 'roque as letras de lugar e forme anagramas!',
    link: 'https://github.com/camila-cruz/anagram-board',
    destaque: false,
  },
  {
    title: 'Inteligência Artificial',
    image: '/images/projetos/inteligencia-artificial.png',
    text: 'Projetos e recursos para consulta e aprendizagem sobre IA.',
    link: 'https://github.com/camila-cruz/inteligencia-artificial',
    destaque: true,
  },
]

export default function Home() {
  return (
    <Box>
      <Capa title="Camila Cruz"/>
      <Cabecalho />
      <Sobre />
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
          <Grid.Row order={{ xs: 2, md: 0 }}>
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
                    <Card title={card.title} image={card.image} text={card.text} link={card.link} destaque={card.destaque} />
                  </Grid.Col>
                )
              }
            })}
          </Grid.Row>
          <Grid.Row order={1}>
            {cards.map((card) => {
              if (card.destaque) {
                return (
                  <Grid.Col
                    value={12}
                    key={card.title}
                    display="flex"
                    justifyContent="center"
                  >
                    <Card title={card.title} image={card.image} text={card.text} link={card.link} destaque={card.destaque} />
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
