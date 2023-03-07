import mixins from "./mixins"

export const lightTheme = {
  dark: "#000",
  light: "#fff",
  body: `rgba(218,211,209,1)`,
  bodyOpacity: "rgba(218,211,209,.8)",
  bodyVariant: "rgba(218,211,209,1)",
  bodyInverse: "rgba(39,39,39,1.0)",
  bodyInverseOpacity: "rgba(39,39,39,.9)",
  text: "rgba(39,39,39,1.0)",
  textLight: "rgba(218,211,209,1)",
  textInverse: "rgba(236,233,234,1)",
  textNeon: "#41ead4",

  // headedr
  backgroundHeader: "rgba(218, 211, 209, .6)",
  navBackground: "rgba(0,0,0,0.4)",
  navBackgroundActive: "rgba(0,0,0,1)",

  // border: "rgba(65,57,46,1.0)",
  border: "rgba(39,39,39,1.0)",
  borderInverse: "rgba(218,211,209,1)",
  borderLigth: "rgba(65,57,46,0.5)",
  background: "rgba(255,255,255,1.0)",
  foreground: "rgba(39,39,39,1.0)",
  hoverBackground: "rgba(0,0,0, .2)",
}

export const darkTheme = {
  dark: "#000",
  light: "#fff",
  body: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(40, 42, 56, 1) 0%,
    rgba(2, 15, 28, 1) 81.3%
  )`,
  bodyOpacity: "rgba(218,211,209,.8)",
  bodyVariant: "rgba(218,211,209,1)",
  bodyInverse: "rgba(39,39,39,1.0)",
  bodyInverseOpacity: "rgba(39,39,39,.9)",
  text: "rgba(250,250,250,1.0)",
  textLight: "rgba(218,211,209,1)",
  textInverse: "rgba(32, 45, 58, 1)",
  textNeon: "#177e89",

  //header
  backgroundHeader: "rgba(32, 45, 58, .6)",
  navBackground: "rgba(171,145,68,.2)",
  navBackgroundActive: "rgba(171,145,68,1.0)",

  //border
  border: "rgba(171,145,68,1.0)",
  borderInverse: "rgba(218,211,209,1)",
  borderLigth: "rgba(65,57,46,0.5)",
  background: "rgba(0,0,0,1.0)",
  foreground: "#dee2e6",
  hoverBackground: "rgba(0,0,0,.5)",

  //hero
  heroBackground: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  )`,
}

export const redTheme = {
  body: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% )`,
  text: "#",
  border: "#000",
  background: "#999",
  heroBackground: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 1, 83, 1) 90%
  )`,
  background: "rgba(255,255,255,1.0)",
  foreground: "rgba(0,0,0,1.0)",
  hoverBackground: "rgba(255,255,255, .4)",
  navBackground: "rgba(0,0,0,0.4)",
  navBackgroundActive: "rgba(0,0,0,1)",
}

export const base = {
  bp: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 400px)`,
    mobileL: `(max-width: 480px)`,
    tabletS: `(max-width: 600px)`,
    tabletL: `(max-width: 768px)`,
    desktopXS: `(max-width: 900px)`,
    desktopS: `(max-width: 1080px)`,
    desktopM: `(max-width: 1200px)`,
    desktopL: `(max-width: 1440px)`,
  },

  mixins,
}
