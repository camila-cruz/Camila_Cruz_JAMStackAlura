import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Card from '../../commons/Card';
import { SectionTitle } from '../../commons/SectionTitle';
import { Grid } from '../layout/Grid';

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

const WrapperProjetosBase = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]}px 0;

  ${breakpointsMedia({
    md: css`
      padding: ${({ theme }) => theme.spacing[4]}px 0;
    `
  })}

  /* background-color: ${({ theme }) => theme.mainUi.background.light.primary}; */
  background: ${({ theme }) => theme.mainUi.background.light.primary} url('/images/gray-honeycomb-empty.svg') no-repeat right bottom;
  background-size: 300px auto;

  & > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default function WrapperProjetos() {
  return (
    <WrapperProjetosBase>
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
    </WrapperProjetosBase>
  )
}