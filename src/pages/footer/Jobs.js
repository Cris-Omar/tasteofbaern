import "../../styles/style.css"
import React from 'react'
import { useThemeContext } from '../../components/context/ThemeContext'

export default function Jobs() {

  const { theme } = useThemeContext()

  return (

    <div className='jobs' id={theme}>

        <h1>Jobs</h1>
        <h2>Jobs go to be listed here!</h2>
        
    </div>
  )
}