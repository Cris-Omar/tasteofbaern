import { useTranslation } from "react-i18next"
import "../../styles/style.css"
import Bar from "./Bar";

export default function Menu(){

  const { t } = useTranslation();

  return(
    <div className="menu">
      <h2>{t('Menu_Title')}</h2>
      <Bar />
    </div>
  )
}