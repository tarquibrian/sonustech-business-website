import { createContext, useContext, useReducer } from "react"
import AppReducer, { initialState } from "./app.reducer"

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const toggleTheme = (currentTheme) => {
    dispatch({
      type: "TOGGLE THEME",
      payload: {
        currentTheme,
      },
    })
  }

  const setTheme = (newTheme) => {
    dispatch({
      type: "SET THEME",
      payload: {
        newTheme,
      },
    })
  }

  const setNavigation = (newNav) => {
    console.log(newNav)
    dispatch({
      type: "SET NAV",
      payload: {
        newNav,
      },
    })
  }

  return (
    <AppContext.Provider
      value={{ state, toggleTheme, setTheme, setNavigation }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
