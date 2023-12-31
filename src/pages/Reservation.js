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
      <p>{t('Reservation_mail')}</p>
      <Link to="mailto:reservation@tasteofbaern.ch">reservation@tasteofbaern.ch</Link>
      <p>{t('Reservation_formular')} </p>
      <Link to="/contact">{t('reservation_contact_form')}</Link>
      <p>{t('Reservation_phone')}</p>
      <p>{t('Reservation_phone_number')}</p>
    </div>
  )
}