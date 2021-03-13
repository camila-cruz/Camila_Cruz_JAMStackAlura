import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  border: 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.mainUi.background.light.tertiary};
  color: ${({ theme }) => theme.mainUi.text.light.tertiary};
`;
