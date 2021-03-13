import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Button = styled.button`
  width: 200px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  border: 0;
  border-radius: 8px;

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  background-color: ${({ theme, variant }) => theme.mainUi.background.light[variant]};
  color: ${({ theme, variant }) => theme.mainUi.text.light[variant]};
  
  ${propToStyle('marginTop')}
`;
