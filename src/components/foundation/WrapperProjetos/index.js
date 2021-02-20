import React from 'react';
import styled from 'styled-components';

export const WrapperProjetos = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`