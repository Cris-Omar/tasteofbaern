import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import FileArrowDown from "../assets/icons/FileArrowDown";
import FileArrowUp from "../assets/icons/FileArrowUp";
import "../styles/style.css";

const Posts = [
  {
    title: "Neueröffnung geplant!",
    image: "/postPictures/Essensplatte.jpg",
    shortText: "Wir eröffnen mit einem neuen Konzept, einen zentralen Standort in Bern für ein kulinarisches Erlebnis!"
  },
  // Add more posts as needed
];

export default function EventsContainer() {
  const [showParagraphs, setShowParagraphs] = useState(false);
  const toggleParagraphs = () => {
    setShowParagraphs(!showParagraphs);
  };

  const { t } = useTranslation();

  return (
    <div className="events">
      <h2>{t('events_upcoming')}</h2>
      <div className='posts'>
        {Posts.map((post, index) => (
          <div key={index} className='PostsItems'>
            <div className="picture" style={{ backgroundImage: `url(${post.image})` }}></div>
            <h3>{post.title}</h3>
            {showParagraphs && <p>{post.shortText}</p>}
            <button onClick={toggleParagraphs}>
              {showParagraphs ? <FileArrowUp /> : <FileArrowDown />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
