import React from 'react';
import styled from 'styled-components';

const IconBase = styled.img`
  height = ${size}px;
`;

export default function Icon({ size, src }) {
  return (
    <IconBase src={src} size={size}/>
  )
}

