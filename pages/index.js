import React, { useState } from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';

import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import Sobre from '../src/components/commons/Sobre';
import { Box } from '../src/components/foundation/layout/Box';
import WrapperProjetos from '../src/components/foundation/WrapperProjetos';
import FormContato from '../src/components/patterns/FormContato';

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      <Capa title="Camila Cruz" />
      <Cabecalho />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        {(props) => <FormContato props={props} />}
      </Modal>
      <Sobre />
      <WrapperProjetos />
      <Footer />
    </Box>
  );
}
