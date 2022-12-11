export const initialState = {
  theme: 'light',
  top: false,
}

const AppReducer = (state, action) => {
  const { type, payload } = action
  console.log('payload', payload)
  switch (type) {
    case 'TOGGLE THEME':
      const toggleTheme = state.theme === 'light' ? 'dark' : 'light'
      return {
        ...state,
        theme: toggleTheme,
      }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

export default AppReducer
