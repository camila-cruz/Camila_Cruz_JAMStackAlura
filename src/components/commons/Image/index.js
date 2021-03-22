import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Image = styled.img`
  width: auto;

  ${({ bordered }) => bordered && css`
    border: 1px solid ${({ theme }) => theme.mainUi.background.light.tertiary};
    border-radius: 8px;
  `}

  ${propToStyle('height')};
`;
