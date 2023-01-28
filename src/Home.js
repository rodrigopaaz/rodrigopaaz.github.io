import React from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import { Divide as Hamburger } from 'hamburger-react'

export default function Home() {
  const 
  whatssapp = 'https://api.whatsapp.com/send?phone=5521975297102&text=Ol%C3%A1,%20seja%20bem%20vindo!'
  return (
    <div className='main__div'>
    <Sidebar />
    <div className='div__landing'>
  <div className='div__title'>
    <div className='div_hamburguer'>
    <Hamburger/>
    </div>
  <h1>Olá, <br /> Sou Rodrigo, <br /> Desenvolvedor Web</h1>
  <h3>Front End Developer - Junior</h3>
  <button
  className='button__contato'
  type='button'
  onClick={()=> window.location.replace(whatssapp)}
  >Contato</button>
  </div>
    <Content />
  </div>
    </div>
);
}
