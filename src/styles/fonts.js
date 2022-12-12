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

  for (const [key, value] of Object.entries(family["types"])) {
    const weight = key
    const type = value

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url('/fonts/Oswald/Oswald-${type}.ttf');
        font-weight: ${weight};
        font-style: ${style}; 
      }
    `
  }

  return styles
}

const OswaldNormal = CreateFontFaces(Oswald)

const Fonts = css`
  ${OswaldNormal}
`

export default Fonts
