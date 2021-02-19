import styled from 'styled-components';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Card from '../src/components/commons/Card';

import Footer from '../src/components/commons/Footer';
import { Box } from '../src/components/foundation/layout/Box';
import { WrapperProjetos } from '../src/components/foundation/WrapperProjetos';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Box>
      <Capa title="Camila Cruz"/>
      <Cabecalho />
      <WrapperProjetos>
        <Card title="Instalura" image="a" text="Projeto do módulo 1 do Bootcamp JAMStack Alura" />
        <Card title="Instalura" image="a" text="Projeto do módulo 1 do Bootcamp JAMStack Alura" />
        <Card title="Instalura" image="a" text="Projeto do módulo 1 do Bootcamp JAMStack Alura" />
      </WrapperProjetos>
      <Footer />
    </Box>
  )
}
