import React from 'react'
import "../../styles/style.css"
import { useState } from 'react';
import UploadIcon from "../../assets/icons/UploadIcon"
import { useThemeContext } from "../../components/context/ThemeContext"
import { useTranslation } from 'react-i18next';

export default function Contact() {

  const [selectedFile, setSelectedFile] = useState(null);

  const { theme } = useThemeContext()

  const { t } = useTranslation()

  return (

    <div className='contact' id={theme} >
      <h1>{t('contact_us')}</h1>

      <h2>{t('contact_us_text')}</h2>

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
          <textarea rows={7} ></textarea>
        </div>
        <div className='fileUploadIcon'>
          <label>{t('upload_file')}</label>
          <UploadIcon value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])} />
        </div>

          <button type="submit">{t('send')}</button>
      </form>

      </div>
    </div>
  )
}