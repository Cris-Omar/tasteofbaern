import React from 'react'
import "../../styles/style.css"
import { useState } from 'react';
import UploadIcon from "../../assets/icons/UploadIcon"
import { useThemeContext } from "../../components/context/ThemeContext"

export default function Contact() {

  const [selectedFile, setSelectedFile] = useState(null);

  const { theme } = useThemeContext()

  return (

    <div className='contact' id={theme} >
      <h1>contact us!</h1>

      <h2>if you have a question or input, write us!</h2>

      <div className='contactForm'>
      <form>
        <div className='object'>
          <label>name</label>
          <input type="text"></input>
        </div>
        <div className='object'>
          <label>mail</label>
          <input type="text"></input>
        </div>
        <div className='object'>
        <label>message</label>
          <textarea rows={7} ></textarea>
        </div>
        <div className='fileUploadIcon'>
          <label>upload file</label>
          <UploadIcon value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])} />
        </div>

          <button type="submit">send</button>
      </form>

      </div>
    </div>
  )
}