import mixins from "./mixins"
// export const theme = {
//   body: "#fff",
//   text: "#000",
//   border: "#000",
//   background: "#363537",
// }

// export const darkTheme = {
//   body: "#363537",
//   text: "#FAFAFA",
//   border: "#6B8096",
//   background: "#999",
// }

const theme = {
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

export default theme
