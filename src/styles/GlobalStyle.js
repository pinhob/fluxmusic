import { createGlobalStyle } from 'styled-components/macro';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--primary-color-black);
    color: var(--secondary-color-white);
    margin: 0 auto;
    max-width: var(--max-width);
    min-height: 100%;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;