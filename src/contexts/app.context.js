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
    console.log({ newTheme })
    dispatch({
      type: "SET THEME",
      payload: {
        newTheme,
      },
    })
  }

  return (
    <AppContext.Provider value={{ state, toggleTheme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
