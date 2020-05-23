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

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFF;
    border-radius: 6px;
    padding: 20px;

    .modal-actions {
      display: flex;
      justify-content: space-evenly;
      margin-top: 24px;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
  }
`;
