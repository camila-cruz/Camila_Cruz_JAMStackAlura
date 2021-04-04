import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Card from '../../commons/Card';
import { SectionTitle } from '../../commons/SectionTitle';
import { Grid } from '../layout/Grid';

const cards = [
  {
    id: 1,
    title: 'The Blacklist: The List',
    image: '/images/projetos/the-blacklist.webp',
    text: 'A lista da série The Blacklist.',
    link: 'https://github.com/camila-cruz/the-blacklist',
    destaque: false,
  },
  {
    id: 2,
    title: 'Sistema SOS Nova Vida',
    image: '/images/projetos/sos-nova-vida.webp',
    text: 'Sistema integrado com website para a SOS Nova Vida.',
    link: 'https://github.com/camila-cruz/sos-nova-vida',
    destaque: false,
  },
  {
    id: 3,
    title: 'Anagram Board',
    image: '/images/projetos/anagram-board.webp',
    text: 'roque as letras de lugar e forme anagramas!',
    link: 'https://github.com/camila-cruz/anagram-board',
    destaque: false,
  },
  {
    id: 4,
    title: 'Inteligência Artificial',
    image: '/images/projetos/inteligencia-artificial.webp',
    text: 'Projetos e recursos para consulta e aprendizagem sobre IA.',
    link: 'https://github.com/camila-cruz/inteligencia-artificial',
    destaque: true,
  },
];

const WrapperProjetosBase = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]}px 0;

  ${breakpointsMedia({
    md: css`
      padding: ${({ theme }) => theme.spacing[4]}px 0;
    `,
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
  const [destaque, setDestaque] = useState(4);

  function handleDestaque(id) {
    setDestaque(id);
  }

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
            // if (!card.destaque) {
            if (card.id !== destaque) {
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
                  <Card
                    title={card.title}
                    image={card.image}
                    text={card.text}
                    link={card.link}
                    destaque={card.id === destaque}
                    onClick={() => handleDestaque(card.id)}
                  />
                </Grid.Col>
              );
            }
            return null;
          })}
        </Grid.Row>
        <Grid.Row order={1}>
          {cards.map((card) => {
            // if (card.destaque) {
            if (card.id === destaque) {
              return (
                <Grid.Col
                  value={12}
                  key={card.title}
                  display="flex"
                  justifyContent="center"
                >
                  <Card
                    title={card.title}
                    image={card.image}
                    text={card.text}
                    link={card.link}
                    destaque={card.id === destaque}
                  />
                </Grid.Col>
              );
            }
            return null;
          })}
        </Grid.Row>
      </Grid.Container>
    </WrapperProjetosBase>
  );
}
