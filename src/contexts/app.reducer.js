export const initialState = {
  currentTheme: "lighter",
  top: false,
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
      console.log(payload.newTheme)
      return {
        ...state,
        currentTheme: payload.newTheme,
      }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

export default AppReducer
