import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito';
  }
  
  html,
  body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;
