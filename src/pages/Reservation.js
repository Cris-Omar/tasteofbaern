import React from "react"
import { Link } from "react-router-dom"
import "../styles/style.css"
import { useTranslation } from 'react-i18next';

export default function Reservation(){
  
  const { t } = useTranslation();

  return(
    <div className="reservation">
      <h2>{t('Reservation')}</h2>

      <p>{t('Reservation_Subtext')}</p>
      <p>{t('Reservation_mail')} <Link to="mailto:reservation@tasteofbaern.ch">reservation@tasteofbaern.ch</Link></p>
      <p>{t('Reservation_formular')} <Link to="/contact">Formular</Link></p>
      <p>{t('Reservation_phone')} 123456</p>
    </div>
  )
}