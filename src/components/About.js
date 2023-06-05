import React from 'react'
import '../styles/about.css'
import self from '../images/rodrigo.png'

export default function About() {
  return (
    <div className='div__about' id='sobre'>
        <div className='div__self'>
          <img src={self} alt="rodrigoimage" className='img__self'/>
        </div>
        <div className='div__description'>
        <h5>Sobre Mim</h5>
        <p>
        Desenvolvedor full-stack apaixonado por tecnologia, 
        com habilidades em React, Hooks, Redux, RTL, Jest, Node.js, 
        MySQL, arquitetura MSC, Docker, Express, MongoDB e TypeScript. Experiência em realizar 
        testes unitários e de integração para garantir a qualidade do código. 
        Familiarizado com tecnologias ágeis, como Kanban e Scrum. 
        <br />
        <br />
        Interessado em aprender e aplicar novas tecnologias, como JAVA e C#. Buscando oportunidades para aplicar meus conhecimentos e contribuir para projetos significativos.
        </p>
        </div>
    </div>
  )
}
