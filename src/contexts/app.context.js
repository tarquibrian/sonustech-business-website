import { createContext, useContext, useReducer } from "react"
import AppReducer, { initialState } from "./app.reducer"

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const toggleTheme = (currentTheme) => {
    const newTheme = state.currentTheme
    dispatch({
      type: "TOGGLE THEME",
      payload: {
        currentTheme,
      },
    })
  }

  return (
    <AppContext.Provider value={{ state, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
