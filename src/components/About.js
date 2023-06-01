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
        Meu nome é Rodrigo tenho 34 anos. sou de natural de Duque de caxias no RJ,  
        atualmente moro em búzios no rio de janeiro. Vivo com minha esposa e nossos dois filhos. 
        Sou formado em administração de empresas, me formei na área administrativa pois empreendi na área comercial, 
        em um mercado de pegueno porte, por cerca de 10 anos.
        <br />
        <br />
        Em 2022 iniciei meus estudos na Trybe, escola de tecnologia que ensina por projetos. 
        Neste curso já desenvolvi 26 projetos.
        </p>
        </div>
    </div>
  )
}
