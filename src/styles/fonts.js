import { css } from "styled-components"

const Oswald = {
  name: "Oswald",
  normal: {
    200: "ExtraLight",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "SemiBold",
    700: "Bold",
  },
}

const DMSans = {
  name: "DMSans",
  normal: {
    400: "Regular",
    500: "Medium",
    700: "Bold",
  },
  italic: {
    400: "RegularItalic",
    500: "MediumItalic",
    700: "BoldItalic",
  },
}

const Raleway = {
  name: "Raleway",
  normal: {
    200: "ExtraLight",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "SemiBold",
    700: "Bold",
    800: "ExtraBold",
  },
  italic: {
    200: "ExtraLightItalic",
    300: "LightItalic",
    400: "RegularItalic",
    500: "MediumItalic",
    600: "SemiBoldItalic",
    700: "BoldItalic",
    800: "ExtraBoldItalic",
  },
}

const CreateFontFaces = (family) => {
  let styles = ""

  if (family["normal"] !== undefined) {
    for (const [key, value] of Object.entries(family["normal"])) {
      const weight = key
      const type = value

      styles += `
      @font-face {
        font-family: '${family.name}';
        src: url('/fonts/${family.name}/${family.name}-${type}.ttf');
        font-weight: ${weight};
        font-style: normal;
        font-display: auto;
      }
    `
    }
  }
  if (family["italic"] !== undefined) {
    for (const [key, value] of Object.entries(family["italic"])) {
      const weight = key
      const type = value

      styles += `
      @font-face {
        font-family: '${family.name}';
        src: url('/fonts/${family.name}/${family.name}-${type}.ttf');
        font-weight: ${weight};
        font-style: italic;
        font-display: auto;
      }
    `
    }
  }

  return styles
}

const OswaldNormal = CreateFontFaces(Oswald)
const DMSansNormalItalic = CreateFontFaces(DMSans)
const RalewayNormalItalic = CreateFontFaces(Raleway)

const Fonts = css`
  ${OswaldNormal + DMSansNormalItalic + RalewayNormalItalic}
`

export default Fonts
