export const initialState = {
  currentTheme: "lighter",
  top: false,
  currentNavigation: "hero",
}

const AppReducer = (state, action) => {
  const { type, payload } = action
  console.log("payload", payload)
  switch (type) {
    case "TOGGLE THEME":
      const toggleTheme = state.currentTheme === "light" ? "dark" : "light"
      return {
        ...state,
        currentTheme: toggleTheme,
      }
    case "SET THEME":
      return {
        ...state,
        currentTheme: payload.newTheme,
      }
    case "SET NAV":
      return {
        ...state,
        currentNavigation: payload.newNav,
      }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

export default AppReducer
