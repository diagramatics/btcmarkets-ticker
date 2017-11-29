import { injectGlobal } from 'styled-components';

/* TODO: Bug here on no-unused-expressions */
/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #f6f3eb;
    font-family: 'Source Sans Pro', 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
    color: #444;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  #app {
    height: 100%;
  }
`;
/* eslint-enable */
