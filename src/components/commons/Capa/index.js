import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const CapaBase = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.mainUi.background.light.secondary}; */
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.background.secondary} url('/images/${({ theme }) => theme.solidHoneycomb}');
`;

// eslint-disable-next-line react/prop-types
export default function Capa({ title }) {
  return (
    <CapaBase>
      <Text as="h1" variant="h1" size={2}>{title}</Text>
      <Text as="h2" variant="h3" size={0}>Developer</Text>
    </CapaBase>
  );
}
