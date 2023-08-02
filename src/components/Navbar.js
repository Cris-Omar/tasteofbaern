import "../styles/style.css"
import React, {useState} from "react"
import { Link } from 'react-router-dom'
import { useThemeContext } from '../components/context/ThemeContext'
import Moon from "../assets/icons/Moon"
import Sun from "../assets/icons/Sun"
import LogoforDark from "../assets/icons/LogoforDark"
import LogoforLight from "../assets/icons/LogoforLight"

export default function NavBar() {

  //change Light Dark Theme
  const {theme, setTheme } = useThemeContext()
  
  //handle buttonclick for Theme change
  const [ click, setClick] = useState(false)

  //function to change style
  const handleClick = () => {
    setTheme((state ) => (state === "Dark" ? "Light" : "Dark"))
    setClick(!click)
  }

  return (
    <div className='topbar' >
      <div className="topbarExtender">
        <div className='topbarWrapper'>
          <div className='logo'> 
          {theme === "Light" ? <LogoforLight /> : <LogoforDark /> }
            
          </div>
          <div className="navbarMenu">
            <Link to="/">Home</Link>
            <Link to="/cuisine">Cuisine</Link>
            <Link to="/events">Events</Link>
            <Link to="/voucher">Voucher</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/openninghours">opening hours</Link>
            <Link to="/">DE</Link>
            <button onClick={handleClick} className="themeChanger">
              {theme === "Light" ? <Moon /> : <Sun />}
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}