import "../styles/style.css";
import React from 'react';
import { useThemeContext } from '../components/context/ThemeContext';
import { useTranslation } from "react-i18next";

export default function Jobs() {

  const { theme } = useThemeContext();
  const { t } = useTranslation();

  return (

    <div className='jobs' id={theme}>
        <h2>{t('Jobs')}</h2>
        <h3>{t('Jobs_Subtext')}</h3>
        
    </div>
  )
}