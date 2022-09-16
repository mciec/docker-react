import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../contextes/ThemeContext'

export const SiteMap = (props: any): JSX.Element => {
  const theme = useTheme()
  const style = {
    backgroundColor: theme.theme === 'dark' ? 'black' : 'white',
    color: theme.theme === 'dark' ? 'white' : 'black'
  }

  return (
        <>
        <ul>
          <li style = { { ...style } }><NavLink to='/'>Home</NavLink></li>
          <li style = { { ...style } }><NavLink to='/login'>Login</NavLink></li>
          <li style = { { ...style } }><NavLink to='/counterbutton/xxx'>CounterButton</NavLink></li>
          <li style = { { ...style } }><NavLink to='/protected'>Protected</NavLink></li>
          <li style = { { ...style } }><NavLink to='/controlledform'>ControlledForm</NavLink></li>
        </ul>
        </>
  )
}
