/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import RepoCard from '../../commons/Card/RepoCard';
// import Sobre from '../../commons/Sobre';

export default function AboutScreen({ repos }) {
  const sortedRepos = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return (
    <Grid.Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="48px"
    >
      <Grid.Row>
        <Grid.Col>
          <Text
            as="h2"
            variant="h2"
            size={2}
            textAlign="center"
            marginBottom="16px"
          >
            Sobre mim
          </Text>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col
          offset={{ md: 1 }}
          value={{ xs: 12, md: 4 }}
          display="flex"
          // justifyContent="center"
        >
          <Image src="/images/avatar.png" width="352" height="373.33" />
        </Grid.Col>
        <Grid.Col
          offset={{ md: 1 }}
          value={{ xs: 12, md: 5 }}
          alignSelf={{ md: 'center' }}
        >
          <Text
            as="p"
            variant="paragraph"
            size={0}
            fontWeight="normal"
            marginTop={{ xs: '32px' }}
            marginBottom={{ xs: '32px' }}
          >
            Sou formada em Análise e Desenvolvimento de Sistemas pela FATEC São Caetano do Sul,
            mas não estou trabalhando na área.
            Enquanto isso, faço pequenos projetos no GitHub e tento aprender tecnologias novas
            para me testar com novos desafios.
            Sou da turma do front-end, mas adoro programar
            em Python e me aventuro com Django e Flask.
            Atualmente, trabalho no setor público e estou sempre em busca de projetos
            open-source para contribuir, freelas e oportunidades de aprender e ensinar.
            <Text variant="strong"> E aí, let&apos;s code together?</Text>
          </Text>
        </Grid.Col>
      </Grid.Row>

      {/* <Grid.Row>
        <Grid.Col>
          <Sobre invertColor />
        </Grid.Col>
      </Grid.Row> */}

      <Grid.Row>
        <Grid.Col
          offset={{ md: 1 }}
          value={{ xs: 12, md: 10 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            as="h3"
            variant="h3"
            size={0}
            marginTop={{ md: '48px' }}
            marginBottom={{ md: '32px' }}
          >
            Meus repositórios
          </Text>

          <Grid.Row marginBottom={{ md: '32px' }}>
            {sortedRepos.map((repo) => (
              <Grid.Col
                key={repo.id}
                display="flex"
                justifyContent="center"
              >
                <RepoCard
                  url={`/projetos/${repo.name}`}
                  name={repo.name}
                  description={repo.description}
                />
              </Grid.Col>
            ))}
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
