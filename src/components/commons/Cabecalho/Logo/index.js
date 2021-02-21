import React from 'react';
import styled from 'styled-components';

const LogoBase = styled.a`
  font-size: ${({ theme }) => theme.typography.h3.size[0]}px;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export default function Logo() {
  return (
    <LogoBase>
      {'<Camila/>'}
    </LogoBase>
  );
}
