import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    background: #F0F2F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
