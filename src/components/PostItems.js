import React, {useState} from 'react'
import FileArrowDown from "../assets/icons/FileArrowDown"
import FileArrowUp from "../assets/icons/FileArrowUp"

export default function PostsItems({title, image, shortText}) {
  
  const [showParagraphs, setShowParagraphs] = useState(false);

  const toggleParagraphs = () => {
    setShowParagraphs(!showParagraphs);
  };

  return (
    <div className='PostsItems'>
      <div className="picture" style={{ backgroundImage: `url(${image})` }}></div>
      <h3> { title } </h3>

      {showParagraphs && <p> { shortText } </p>}
      
      <button onClick={toggleParagraphs}>
        {showParagraphs ? <FileArrowUp /> : <FileArrowDown />}
      </button>
    </div>
  )
}
