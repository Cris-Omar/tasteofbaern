import React from "react"
import "../styles/style.css"
import ImageGallery from "react-image-gallery"

export default function Gallery() {

  const images = [
    {
      original: "/pictures/indishfood_1920x1280.jpg",
      thumbnail: "/pictures/indishfood_180x100.jpg",
    },
    {
      original: "/pictures/asianfood01_1920x1280.jpg",
      thumbnail: "/pictures/asianfood01_180x100.jpg",
    },
    {
      original: "/pictures/Burger01_1920x1280.jpg",
      thumbnail: "/pictures/Burger01_180x100.jpg",
    },
    {
      original: "/pictures/hot01_1920x1280.jpg",
      thumbnail: "/pictures/hot01_180x100.jpg",
    },
    {
      original: "/pictures/streetfood01_1920x1280.jpg",
      thumbnail: "/pictures/streetfood01_180x100.jpg",
    },
  ]

  return (
    <div className='gallery'>
      <ImageGallery items={images} />
    </div>
  )
}
