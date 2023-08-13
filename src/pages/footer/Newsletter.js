import { useTranslation } from "react-i18next"
import "../../styles/style.css"

export default function Newsletter(){

  const { t } = useTranslation();

  return(
    <div className="newsletter">
      <h2>{t('Newsletter')}</h2>
      <h3>{t('Newsletter_Subtext')}</h3>

    </div>
  )
}