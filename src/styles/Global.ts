import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamily};
    margin: 0;
    outline: none !important;
    padding: 0;

    ::before,
    ::after {
      box-sizing: inherit;
    }

    ::-moz-selection {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ::selection {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }

  body,
  html {
    background-image: linear-gradient(#fff9f9, #fff);
    background-repeat: no-repeat;
    color: ${theme.colors.grey[5]};
    font-size: 16px;
    line-height: 24px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Spectral', serif;
  }
`;

export default GlobalStyle;
