import "../styles/style.css"

export default function Location(){

  return(
    <div className="location">
      <p>you can find us in Bern:</p>
      <div className="frame">
        <iframe 
          width="100%"
          height="800"
          frameborder="0" 
          scrolling="no"
          marginheight="0"
          marginwidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=humboldtstrasse%2010,%20Bern+(Taste%20of%20B%C3%A4rn)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </div>
    </div>
  )
}