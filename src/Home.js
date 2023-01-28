import React, { useContext, useState } from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import { Divide as Hamburger } from 'hamburger-react'
import AppContext from './context/Context';

export default function Home() {
  const {toggleMenu, setToggleMenu} = useContext(AppContext)
  const 
  whatssapp = 'https://api.whatsapp.com/send?phone=5521975297102&text=Ol%C3%A1,%20seja%20bem%20vindo!'
  return (
    <div className='main__div'>
    <Sidebar />
    <div className='div__landing'>
  <div className='div__title'>
    <button 
    className='div_hamburguer'
    onClick={()=>setToggleMenu(!toggleMenu)}
    >
    <Hamburger/>
    </button>
  <h1>Olá, <br /> Sou Rodrigo, <br /> Desenvolvedor Web</h1>
  <h3>Front End Developer - Junior</h3>
  <button
  className='button__contato'
  type='button'
  onClick={()=> window.location.replace(whatssapp)}
  >WhatsApp</button>
  </div>
    <Content />
  </div>
    </div>
);
}
