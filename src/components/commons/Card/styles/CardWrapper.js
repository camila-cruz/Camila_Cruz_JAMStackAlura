import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 250px;
  height: 300px;

  /* border: 2px solid ${({ theme }) => theme.mainUi.background.light.tertiary}; */
  border-radius: ${({ theme }) => theme.border[0]}px;
  margin: ${({ theme }) => theme.spacing[1]}px 0px;

  /* padding: 20px 20px; */

  background-color: white;
  /* box-shadow: 2px 2px 10px #85738c; */
`

CardWrapper.CardTitle = styled.div`
  position: relative;

  padding: 10px;
  text-align: center;

  font-size: ${({ theme }) => theme.typography.h3.size[0]}px;
  font-weight: ${({ theme }) => theme.weight.bold};

  background-color: ${({ theme }) => theme.mainUi.background.light.secondary};
  color: ${({ theme }) => theme.mainUi.text.light.primary};
`

CardWrapper.CardImage = styled.div`
  width: 100%;
  height: 100%;
  
  & > img {
    height: 100%;
    width: inherit;
    object-fit: cover;
  }
`

CardWrapper.CardText = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.size[0]}px;
`

CardWrapper.CardDestaque = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 250px;
  height: 300px;

  /* border: 1px solid black;
  border-radius: ${({ theme }) => theme.border[3]}px; */
  margin: ${({ theme }) => theme.spacing[1]}px 0px;

  /* padding: 20px 20px; */

  background-color: white;
  /* border: 0; */
  /* box-shadow: 2px 2px 10px #85738c; */

  & > div > ${CardWrapper.CardText} {
    display: none;
  }

  ${breakpointsMedia({
    sm: css`
      /* max-width: 90%; */
      & > div {
        & > ${CardWrapper.CardText} {
          display: none;
        }
      }
    `,
    md: css`
      width: 100%;
      max-width: 1040px;
      display: flex;
      flex-direction: row;
      margin-top: ${({ theme }) => theme.spacing[2]}px;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 340px;

        & > ${CardWrapper.CardTitle} {
          margin-bottom: 20px;
        }

        & > ${CardWrapper.CardText} {
          display: block;
          padding: ${({ theme }) => theme.spacing[1]}px;
        }
      }

      & > ${CardWrapper.CardImage} {
        width: auto;
        height: 100%;
        max-width: 700px;

        & > img {
          object-fit: cover;
          height: inherit;
          width: 100%;
        }
      }
    `
  })}
`