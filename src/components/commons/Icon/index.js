import React from 'react';
import styled from 'styled-components';

const IconBase = styled.img`
  /* height = 32px; */
`;

// eslint-disable-next-line react/prop-types
export default function Icon({ size, src }) {
  return (
    <IconBase src={src} size={size} />
  );
}
