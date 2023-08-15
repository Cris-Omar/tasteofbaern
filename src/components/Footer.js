import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/style.css"
import InstaIcon from "../assets/icons/InstagramIcon"
import FacebookIcon from '../assets/icons/FacebookIcon'
import { useTranslation } from 'react-i18next'

export default function Footer() {

  const { t } = useTranslation();

  return (

    <div className='footer'>
      <div className='footerImpresumGroup'>
        <div className='socialMedia'>
          <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com/taste_of_baern/' ><InstaIcon /></a></li>
          <li><a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=61550281792846' ><FacebookIcon /></a></li>
        </div>

        <div className='impresum1'>
          <Link to="/offer">{t('Offer')}</Link>
          <Link to="/contact">{t('Contact')}</Link>
          <Link to="/openinghours">{t('Opening_Hours')}</Link>
          <Link to="/reservation">{t('Reservation')}</Link>
          {/*<Link to="/team">{t('Team')}</Link>*/}

        </div>

        <div className='impresum2'>
          <Link to="/jobs">{t('Jobs')}</Link>
          {/*<Link to="/voucher">{t('Voucher')}</Link> */}
          <Link to="/events">{t('Events')}</Link>
          <Link to="/location">{t('Location')}</Link>
          {/*<Link to="/newsletter">{t('Newsletter')}</Link>*/}
          {/*<Link to="/legalNotice">{t('Legal_Notice')}</Link>*/}
        </div>
      </div>

      <div className='copyright'>
        <p>Taste of Bärn &copy; 2023</p>
      </div>
    </div>
  )
}