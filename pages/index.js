import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';

import Footer from '../src/components/commons/Footer';
import Sobre from '../src/components/commons/Sobre';
import { Box } from '../src/components/foundation/layout/Box';
import WrapperProjetos from '../src/components/foundation/WrapperProjetos';

export default function Home() {
  return (
    <Box>
      <Capa title="Camila Cruz" />
      <Cabecalho />
      <Sobre />
      <WrapperProjetos />
      <Footer />
    </Box>
  );
}
