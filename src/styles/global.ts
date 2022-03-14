import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Open Sans', sans-serif;
  };

  #__next, html, body {
    width: 100%;
    min-height: 100vh;
  };

  a { text-decoration: none; };

  input {
    border: none;
    outline: none;
    background: none;
  };

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  };

  // --COLORS-- //
  :root {
    --white: #FFF;
    --black: #000;
    --blue: #0095F6;
    --border: rgba(0, 0, 0, 0.1);
    --background: rgb(250, 250, 250);
  };
`;