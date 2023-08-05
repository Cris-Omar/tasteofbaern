import "../styles/style.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Location(){

  const { t } = useTranslation();

  return(
    <div className="location">

      <h3>{t('Location_Message')}</h3>
      <Link  to="https://www.google.com/maps/place/Humboldtstrasse+10,+3013+Bern/@46.9529987,7.4539296,17" target="_blank">humboldtstrasse 10, 3013 Bern</Link>

      <div className="frame">
        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=humboldtstrasse%2010,%20Bern+(Taste%20of%20B%C3%A4rn)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="800"
          frameborder="0" 
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        >
       </iframe>
      </div>
      <p>{t('Location_Text')}</p>
      <Link to="https://www.google.com/maps/place/Humboldtstrasse+10,+3013+Bern/@46.9529987,7.4539296,17" target="_blank">Google Maps</Link>
    </div>
  )
}