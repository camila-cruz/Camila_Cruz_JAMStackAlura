import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Image = styled.img`
  width: auto;

  ${({ shadowed }) => shadowed && css`
    /* border: 1px solid ${({ theme }) => theme.mainUi.background.light.tertiary}; */
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 #5129199e, 0 6px 20px 0 #51291952;
  `}

  ${propToStyle('height')};
`;
