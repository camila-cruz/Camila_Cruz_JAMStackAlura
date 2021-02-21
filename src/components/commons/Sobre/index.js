import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const SobreBase = styled.div`
  padding:  ${({ theme }) => theme.spacing[2]}px;
  background-color: ${({ theme }) => theme.mainUi.background.light.tertiary};
  color: ${({ theme }) => theme.mainUi.text.dark.primary};
`;

export default function Sobre() {
  return (
    <SobreBase>
      <Grid.Container
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12,
              md: 3
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
              md: 6,
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
            <h2
              style={{
                marginTop: '16px',
                marginBottom: '16px',
              }}
            >
              Olá, eu sou a Camila!
            </h2>
            <Text
              tag="p"
              variant="paragraph"
              textAlign={{
                xs: 'center',
                md: 'justify',
              }}
            >
              Sou formada em Análise e Desenvolvimento de Sistemas pela FATEC São Caetano do Sul, mas não estou trabalhando na área.
              Enquanto isso, faço pequenos projetos no GitHub e tento aprender tecnologias novas para me testar com novos desafios.
              Sou da turma do front-end, mas adoro programar em Python e me aventuro com Django e Flask.
              Atualmente, trabalho no setor público e estou sempre em busca de projetos open-source para contribuir, freelas e oportunidades de aprender e ensinar.
              <Text variant="strong"> E aí, let's code together?</Text> 
            </Text>    
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </SobreBase>
  )
}