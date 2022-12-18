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
    transition: all 0.50s linear;
    margin: 0;
    width: 100%;
    min-height: 100%;
    /* overflow-x: hidden; */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
  }

  section {
    /* border-radius: 1.5rem; */
    /* margin: 8rem 0; */
    margin: 0 auto;
    /* max-width: 1000px; */
    /* padding: 0 40px; */
    border-bottom: 1px solid #000;
    /* background: lightblue; */
    /* padding: 0 1rem; */
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }
`
