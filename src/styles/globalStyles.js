import { createGlobalStyle } from "styled-components"

import Fonts from "./fonts"

export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    /* background: ${({ theme }) => theme.body}; */
    background-color: rgb(1, 39, 75);
    color: ${({ theme }) => theme.text};
    font-family: 'Oswald';
    transition: all 0.50s linear;
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
  }

  section {
    border-radius: 1.5rem;
    margin: 8rem 0;
  }
`
