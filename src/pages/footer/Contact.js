import React from 'react'
import "../../styles/style.css"
import { useThemeContext } from "../../components/context/ThemeContext"
import { useTranslation } from 'react-i18next';

export default function Contact() {

  const { theme } = useThemeContext()
  const { t } = useTranslation()

  return (

    <div className='contact' id={theme} >
      <h2>{t('contact_us')}</h2>

      <h3>{t('contact_us_text')}</h3>

      <div className='contactForm'>
        <form>
          <div className='object'>
            <label>{t('name')}</label>
            <input type="text"></input>
          </div>
          <div className='object'>
            <label>{t('mail')}</label>
            <input type="text"></input>
          </div>
          <div className='object'>
          <label>{t('message')}</label>
            <textarea rows={8} ></textarea>
          </div>
            <button type="submit">{t('send')}</button>
        </form>
      </div>
    </div>
  )
}