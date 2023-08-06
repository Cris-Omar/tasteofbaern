import React from "react"
import { Link } from "react-router-dom"
import "../../styles/style.css"
import { useTranslation } from "react-i18next"
import MailforLight from "../../assets/icons/MailforLight"
import MailforDark from "../../assets/icons/MailforDark"
import { useThemeContext } from "../../components/context/ThemeContext"

export default function Team(){

  const { theme } = useThemeContext();
  const { t } = useTranslation()

  return(
    <div className="team">
      <h2>{t('Team_Member')}</h2>
      <div className="teamMember">
        <img src="pictures/team/Mathias_Schnider3.jpg" />
        <div className="memberInfo">
          <p>{t('Team_Name')}: Mathias Schnider</p>
          <p>{t('Team_Position')}: CEO</p>
          <Link to="mailto:mathias.schnider@tasteofbaern.ch">
            {theme === "Light" ? <MailforLight /> : <MailforDark /> }
          </Link>
        </div>
      </div>

      <div className="teamMember">
        <img src="/pictures/team/Cristian_Hernandez3.png" />
        <div className="memberInfo">
          <p>{t('Team_Name')}: Cristian Hernandez</p>
          <p>{t('Team_Position')}: CEO</p>
          <Link to="mailto:cristian.hernandez@tasteofbaern.ch">
           {theme === "Light" ? <MailforLight /> : <MailforDark /> }
          </Link>
        </div>
      </div>
    </div>
  )
}