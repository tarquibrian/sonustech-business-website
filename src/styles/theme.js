import mixins from "./mixins"

export const lightTheme = {
  body: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 239, 225, 1) 90%
  )`,
  heroBackground: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 255, 255, 1) 0%,
    #ebedee 90%
  )`,
  text: "#272727",
  border: "rgba(0,0,0,1.0)",
  background: "rgba(255,255,255,1.0)",
  foreground: "rgba(0,0,0,1.0)",
  hoverBackground: "rgba(255,255,255, .7)",
}

export const darkTheme = {
  body: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(40, 42, 56, 1) 0%,
    rgba(2, 15, 28, 1) 81.3%
  )`,
  text: "rgba(250,250,250,1.0)",
  border: "#AB9144",
  background: "rgba(0,0,0,1.0)",
  foreground: "rgba(255,255,255,1.0)",
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
  background: "rgba(255,255,255,1.0)",
  foreground: "rgba(0,0,0,1.0)",
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
