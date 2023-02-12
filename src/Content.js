import React from 'react'
import './content.css';
import Portifolio from './Portifolio';

export default function Content() {
  return (
    <div className='div__content'>
      <h1>
        Projetos:
      </h1>
      <h4>
        Seguem abaixo alguns dos projetos que desenvolvi até este momento na minha trajetória na Trybe, o link está na imagem do carrousel.
      </h4>
      <Portifolio />
    </div>
  )
}
