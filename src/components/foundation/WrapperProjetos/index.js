import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const WrapperProjetos = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]}px 0;

  ${breakpointsMedia({
    md: css`
      padding: ${({ theme }) => theme.spacing[4]}px 0;
    `
  })}

  background-color: ${({ theme }) => theme.mainUi.background.light.primary};

  & > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`