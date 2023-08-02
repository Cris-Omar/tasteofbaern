import "../../styles/style.css"
import React from 'react'
import { useThemeContext } from '../../components/context/ThemeContext'

export default function LegalNotice() {

  const { theme } = useThemeContext()

  return (
    <div className='legalnotice' id={theme}>
        <h1>Legal Notice</h1>

        <h2>in this site you will find our legal notice</h2>
        
    </div>
  )
}