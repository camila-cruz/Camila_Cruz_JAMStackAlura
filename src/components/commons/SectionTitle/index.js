import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.size[2]}px;
  font-weight: ${({ theme }) => theme.weight.bold};

  color: ${({ theme }) => theme.mainUi.text.light.primary};
  margin-bottom: ${({ theme }) => theme.spacing[1]}px;

  ${breakpointsMedia({
    md: css`
      font-size: ${({ theme }) => theme.typography.h2.size[0]}px;
      margin-bottom: ${({ theme }) => theme.spacing[2]}px;
    `
  })}

`