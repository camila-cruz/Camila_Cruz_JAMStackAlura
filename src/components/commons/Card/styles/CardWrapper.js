import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 250px;
  height: 300px;

  border: 1px solid black;
  border-radius: ${({ theme }) => theme.border[3]}px;
  margin: ${({ theme }) => theme.spacing[1]}px 0px;

  padding: 20px 20px;
`

CardWrapper.CardTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.h3.size[0]}px;
  font-weight: ${({ theme }) => theme.weight.bold};
`

CardWrapper.CardImage = styled.div`
  width: 208px;
  height: 156px;
  
  & > img {
    object-fit: cover;
    height: inherit;
    width: inherit;
  }
`

CardWrapper.CardText = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.size[0]}px;
`

CardWrapper.CardDestaque = styled.div`

`