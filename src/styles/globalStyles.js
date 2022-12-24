import { createGlobalStyle } from "styled-components"

import Fonts from "./fonts"
import variables from "./variables"

export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${variables}
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

/* 
html, body {
  min-height: 100%;
} */

/* html {
  -webkit-tap-highlight-color: transparent;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
} */


/* img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

svg:not([fill]) {
  fill: currentColor;
}
 
svg:not(:root) {
  overflow: hidden;
}

input, button, textarea, select {
  font: inherit;
  color: inherit;
}

textarea {
  overflow: auto;
  resize: vertical;
  resize: block;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
} */


/* ::-moz-selection {
  text-shadow: none;
}

::selection {
  text-shadow: none;
} */
/* 
::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

:-moz-focusring {
  outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
  box-shadow: none;
} */
 
/* ::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 1;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
} */


/* a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  touch-action: manipulation;
}
 
[aria-busy="true"] {
  cursor: progress;
}

[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}


#root, #__next {
  isolation: isolate;
} */
`
