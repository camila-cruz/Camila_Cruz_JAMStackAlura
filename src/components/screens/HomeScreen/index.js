import React from 'react';
import Cabecalho from '../../commons/Cabecalho';
import Capa from '../../commons/Capa';
import Sobre from '../../commons/Sobre';
import WrapperProjetos from '../../foundation/WrapperProjetos';

export default function HomeScreen() {
  return (
    <>
      <Capa title="Camila Cruz" />
      <Cabecalho />
      <Sobre />
      <WrapperProjetos />
    </>
  );
}
