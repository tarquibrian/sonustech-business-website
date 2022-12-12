import { css } from "styled-components"

const FontWeight = {
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
}

const Oswald = {
  name: "Oswald",
  types: FontWeight,
}

const CreateFontFaces = (family, style = "normal") => {
  let styles = ""

  for (const [key, value] of Object.entries(family["weights"])) {
    const weight = value

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const Fonts = css`
  @font-face {
    font-family: "Oswald";
    src: url("/fonts/Oswald/OswaldRegularFont.woff") format("woff")
      url("/fonts/Oswald/OswaldRegularFont.woff2") format("woff2");
  }
`

export default Fonts
