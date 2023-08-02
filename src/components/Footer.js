import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/style.css"

//footer Icons:
import InstaIcon from "../assets/icons/InstagramIcon"
import FacebookIcon from '../assets/icons/FacebookIcon'
import LinkedInIcon from '../assets/icons/LinkedInIcon'

export default function Footer() {

  return (

    <div className='footer'>
      <div className='socialMedia'>
        <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com/taste_of_baern/' ><InstaIcon /></a></li>
        <li><a target="_blank" rel="noreferrer" href='https://www.facebook.com/' ><FacebookIcon /></a></li>
        <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/' ><LinkedInIcon /></a></li>
      </div>

      <div className='impresum'>
        <Link to="/contact">Contact</Link>
        <Link to="/legalNotice">Legal notice</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/team">Team</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/cuisine">Cuisine</Link>
        <Link to="/events">Events</Link>
        <Link to="/voucher">Voucher</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/openninghours">opening hours</Link>
        <Link to="/">DE</Link>
      </div>

      <p>Taste of Bärn &copy; 2023</p>
    </div>
  )
}