import React from 'react'

export default function PostsItems({title, image, shortText}) {
  return (
    <div className='PostsItems'>
      <div className="picture" style={{ backgroundImage: `url(${image})` }}></div>
      <h3> { title } </h3>
      <p> { shortText } </p>
    </div>
  )
}
