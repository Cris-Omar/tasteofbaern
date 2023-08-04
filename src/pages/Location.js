import "../styles/style.css"
import { Link } from "react-router-dom" 

export default function Location(){

  return(
    <div className="location">

      <h3>We are located in </h3>
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

      <p>Open Google Maps to find the best route to us:</p> 
      <Link to="https://www.google.com/maps/place/Humboldtstrasse+10,+3013+Bern/@46.9529987,7.4539296,17" target="_blank">Open Google Maps</Link>
    </div>
  )
}