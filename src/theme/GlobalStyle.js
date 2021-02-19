import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
  
  html,
  body {
    margin: 0;
    padding: 0;

    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`