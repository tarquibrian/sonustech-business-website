import mixins from "./mixins"
export const lightTheme = {
  body: "rgba(255, 255, 255, 1)",
  heroBackground: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(215, 223, 252, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(215, 223, 252, 1) 84%
  )`,
  text: "#000",
  border: "#000",
  background: "#fff",
  foreground: "#000",
  hoverBackground: "rgba(255,255,255, .7)",
}

export const darkTheme = {
  body: "#000",
  text: "#FAFAFA",
  border: "#ced4da",
  background: "#000",
  foreground: "#fff",
  hoverBackground: "rgba(0,0,0,.5)",
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
  background: "#fff",
  foreground: "#000",
  hoverBackground: "rgba(255,255,255, .4)",
}

export const base = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },

  mixins,
}
