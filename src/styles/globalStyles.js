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
    list-style: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    /* background-color: rgb(1, 39, 75); */
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Chivo Mono', 'DMSans', 'Raleway', 'Oswald', sans-serif;
    /* transition: all 0.50s ease; */
    margin: 0;
    width: 100%;
    min-height: 100%;
    /* -moz-osx-font-smoothing: grayscale; */
    /* -webkit-font-smoothing: antialiased; */
    line-height: 1.3;
  }

  section {
    margin: 0 auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  button { 
    border-style: none;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
`
