import "../styles/style.css"
import React from 'react'
import { useThemeContext } from '../components/context/ThemeContext'
import { useTranslation } from 'react-i18next';
import Gallery from '../components/Gallery'
import LogoforLight from "../assets/icons/LogoforLight"
import LogoforDark from "../assets/icons/LogoforDark"

export default function Home() {

  const { theme } = useThemeContext();
  const { t } = useTranslation();
  
  return (

    <div className='home'>

    <h2>{t('Welcome_Message')}</h2>
        {theme === "Light" ? <LogoforLight /> : <LogoforDark /> }
      <h3>{t('Welcome_Text')}</h3>
        <Gallery />
      <p>{t('Subwelcome_Text')}😃</p>
    </div>
  )
}
