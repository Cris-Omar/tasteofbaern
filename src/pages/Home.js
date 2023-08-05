import "../styles/style.css"
import React from 'react'
import { useThemeContext } from '../components/context/ThemeContext'

import Gallery from '../components/Gallery'
import LogoforLight from "../assets/icons/LogoforLight"
import LogoforDark from "../assets/icons/LogoforDark"

import { useTranslation } from 'react-i18next';

export default function Home() {

  const { theme } = useThemeContext();
  const { t } = useTranslation();
  
  return (

    <div className='home'>

    <h2>{t('Welcome_Message')}</h2>
        {theme === "Light" ? <LogoforLight /> : <LogoforDark /> }
      <p>{t('Welcome_Text')}</p>
        <Gallery />
    </div>
  )
}
