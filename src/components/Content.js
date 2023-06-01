import React from 'react'
import '../styles/content.css';
import Portifolio from '../pages/Portifolio';

export default function Content() {
  return (
    <div className='div__content'>
      <h1>
        Projetos:
      </h1>
      <Portifolio />
    </div>
  )
}
