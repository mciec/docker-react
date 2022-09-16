import React, { useContext } from 'react'

interface IThemeContext {
  theme: 'dark' | 'light'
}

const ThemeContext = React.createContext<IThemeContext>({ theme: 'dark' })

export const ThemeProvider = ({ children }: any): JSX.Element => {
  return (
    <ThemeContext.Provider value = { { theme: 'light' }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): IThemeContext => {
  return useContext(ThemeContext)
}
