import React from 'react'
import '../styles/projectCard.css'

export default function ProjectsCards({image, description}) {
  return (
    <div className='div__card'>
        <div>
        <img src={image} alt="card-img" />
        </div>
    </div>
  )
}
