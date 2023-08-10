import "../styles/style.css" 
import React, {useState} from "react"
import { Link } from 'react-router-dom'
import { useThemeContext } from '../components/context/ThemeContext'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import Moon from "../assets/icons/Moon"
import Sun from "../assets/icons/Sun"
import LogoforDark from "../assets/icons/LogoforDark"
import LogoforLight from "../assets/icons/LogoforLight"
import MenuXmark from "../assets/icons/MenuXmark"
import MenuBurger from "../assets/icons/MenuBurger"

export default function NavBar() {

  //change Light Dark Theme
  const {theme, setTheme } = useThemeContext()
  
  const { t } = useTranslation();

  //handle buttonclick for Theme change
  const [ click, setClick] = useState(false)

  //function to change style
  const handleClick = () => {
    setTheme((state ) => (state === "Dark" ? "Light" : "Dark"))
    setClick(!click)
  }

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
}

  //Mobile Open & close menuIcon
  const [menuClick, setMenuClick] = useState(false)
  const handleMenuClick = () => setMenuClick(!click)

  const [locOpen, setLocOpen] = useState(false)
  const handleLocOpen = () =>  {setLocOpen(!locOpen)}

  //Mobile dropdown handle Open
  const [mobOpen, setMobOpen] = useState(false)
  const handleMobOpen = () => {setMobOpen(!mobOpen)}
  //Mobile Location dropdown
  const [locMobOpen, setMobLocOpen] = useState(false)
  const handleMobLocOpen = () =>  {setLocOpen(!locMobOpen)}

  return (
    <div className='topbar' >
      <div className="navbarMenu">
        <div className='logo'> 
            {theme === "Light" ? (
                <Link to="/"><LogoforLight /></Link>
              ) : (
                <Link to="/"><LogoforDark /></Link>
              )}
        </div>
        <div className="options">
          <Link to="/offer">{t("Offer")}</Link>
          <Link to="/events">{t("Events")}</Link>
          {/*<Link to="/voucher">{t("Voucher")}</Link> */}
          <Link to="/reservation">{t("Reservation")}</Link>
          <Link to="/location">{t("Location")}</Link>
          <Link to="/openinghours">{t("Opening_Hours")}</Link>

          <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="en" >EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>

          <button onClick={handleClick}>
            {theme === "Light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>

      {/*small screen Navigation Menu starts here */}
      <div className="mobNavbarMenu">
        <div className='logo'> 
          {theme === "Light" ? (
              <Link to="/"><LogoforLight /></Link>
            ) : (
              <Link to="/"><LogoforDark /></Link>
            )}
        </div>

        <div className="openCloseIcon" onClick= {() => {handleMenuClick(); handleMobOpen();}} >
          {menuClick ? <MenuBurger /> : <MenuXmark />}
          {mobOpen && (
            <div className='mobSubMenu'>

              <li><Link to="/standorte" >{t("Standorte")}</Link></li>
              <li><Link to="/offer">{t("Offer")}</Link></li>
              <li><Link to="/events">{t("Events")}</Link></li>
              {/*<li><Link to="/voucher">{t("Voucher")}</Link></li> */}
              <li><Link to="/reservation">{t("Reservation")}</Link></li>
              <li><Link to="/location">{t("Location")}</Link></li>
              <li><Link to="/openinghours">{t("Opening_Hours")}</Link></li>
              
              <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
                <option value="en" >EN</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
              </select>

              <button onClick={handleClick}>
                {theme === "Light" ? <Moon /> : <Sun />}
              </button>
            </div>
            )}
          </div>
      </div>
      {/*small screen Navigation Menu starts here */}
    </div>
  )
}