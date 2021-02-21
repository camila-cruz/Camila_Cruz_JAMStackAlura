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
import WrapperProjetos from '../src/components/foundation/WrapperProjetos';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Box>
      <Capa title="Camila Cruz"/>
      <Cabecalho />
      <Sobre />
      <WrapperProjetos />
      <Footer />
    </Box>
  )
}
