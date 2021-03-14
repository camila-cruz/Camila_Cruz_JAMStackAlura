import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Button = styled.button`
  width: 200px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  border: 0;
  border-radius: 8px;

  background-color: ${({ theme, variant }) => theme.mainUi.background.light[variant]};
  color: ${({ theme, variant }) => theme.mainUi.text.light[variant]};

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    cursor: not-allowed;
  `};
  
  ${propToStyle('marginTop')}
`;
