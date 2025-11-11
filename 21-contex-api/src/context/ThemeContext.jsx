import React, { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
  return (
     <ThemeDataContext.Provider value='Ravi'>
        {props.children}
     </ThemeDataContext.Provider>
  )
}

export default ThemeContext