import "../../styles/style.css"
import React from 'react'
import { useThemeContext } from '../../components/context/ThemeContext'

export default function LegalNotice() {

  const { theme } = useThemeContext()

  return (
    <div className='legalnotice' id={theme}>
      <h2>Legal Notice</h2>
      <h3>in this site you will find our legal notice</h3>
    </div>
  )
}