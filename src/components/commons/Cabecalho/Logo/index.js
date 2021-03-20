import React from 'react';
import styled from 'styled-components';
import Link from '../../Link';

const LogoBase = styled(Link)`
  font-size: ${({ theme }) => theme.typography.h3.size[0]}px;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {    
    &:after { 
      width: 0;
      left: 50%; 
    }
  }
`;

export default function Logo() {
  return (
    <LogoBase href="/">
      {'<Camila/>'}
    </LogoBase>
  );
}
