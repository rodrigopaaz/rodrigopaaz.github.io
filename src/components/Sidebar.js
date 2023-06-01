import React, { useContext } from 'react'
import '../styles/sideBar.css';
import AppContext from '../context/Context';
import SocialMedia from './SocialMedia';

export default function Sidebar() {
  const {toggleMenu} = useContext(AppContext)
  const element = toggleMenu ? '0' : '100%';
  return (
    <div className='div__side__bar'
    style={{width: element}}
    >
        <h4>Hi!</h4>
        <a href="#home" className="link__sidebar">Home</a>
        <a href="#sobre" className="link__sidebar">Sobre</a>
        <a href="#stacks" className="link__sidebar">Stacks</a>
        <a href="#projetos" className="link__sidebar">Projetos</a>
       
       <SocialMedia />
    </div>
  )
}
