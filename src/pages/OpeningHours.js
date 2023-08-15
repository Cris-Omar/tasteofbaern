import { useTranslation } from "react-i18next"
import "../styles/style.css"

export default function OpenningHours(){
  
  const { t } = useTranslation();

  return(
    <div className="openinghours">
      <h2>{t('opening_hours_title')}</h2>

      <p>{t('opening_hours_data')}</p>
      <p>{t('delivery_day')}</p>
      <p>{t('delivery_night')}</p>

      <p>{t('opening_ps')}</p>
    </div>
  )
}