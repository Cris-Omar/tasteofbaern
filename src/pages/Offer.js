import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import "../styles/style.css"

export default function Offer(){

  const { t } = useTranslation ();

  return(
    <div className="offer">
      <h2>{t('Offer_title')}</h2>
      <h3>{t('Offer_title_Subtext')}</h3>
      <p>{t('interested')} <Link to="/contact">{t('contact_form')}</Link></p>
      <p>{t('release_note')}</p>
    </div>
  )
}