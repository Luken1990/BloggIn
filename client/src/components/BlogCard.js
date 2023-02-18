import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const BlogCard = (prop) => {
  const {image, title, description, author, date, category} = prop.post
  return (
    <div>
    <figure>
      <img src={image} alt={title} />
    </figure>
    <div>
      <h6>{author}</h6>
      <small>{date}</small>
    </div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div>
      <div>
        <AiIcons.AiOutlineShareAlt />
        share
      </div>
    </div>
  </div>
  )
}
