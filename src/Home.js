import React from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import { Divide as Hamburger } from 'hamburger-react'

export default function Home() {
  return (
    <div className='main__div'>
    <Sidebar />
    <div className='div__landing'>
  <div className='div__title'>
    <Hamburger/>
  <h1>Olá, <br /> Sou Rodrigo, <br /> Desenvolvedor Web</h1>
  <h3>Front End Developer - Junior</h3>
  </div>
    <Content />
  </div>
    </div>
);
}
