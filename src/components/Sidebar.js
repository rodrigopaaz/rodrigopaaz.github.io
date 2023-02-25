import React, { useContext } from 'react'
import '../styles/sideBar.css';
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import AppContext from '../context/Context';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const linkedin = 'https://www.linkedin.com/in/rodrigo-paz-dev/'
  const instagram = 'https://www.instagram.com/rodrigopazlimas/'
  const github = 'https://github.com/rodrigopaaz'
  const {toggleMenu} = useContext(AppContext)
  const element = toggleMenu ? '0' : '100%';
  return (
    <div className='div__side__bar'
    style={{width: element}}
    >
        <h4>Web</h4>
        <Link to={'/'} className="link__sidebar">Home</Link>
        <Link to={'/'}className="link__sidebar">Sobre</Link>
        <Link to={'/'}className="link__sidebar">Stacks</Link>
        <Link to={'/portifolio'}className="link__sidebar">Portifólio</Link>
        <Link to={'/'}className="link__sidebar">Contato</Link>
       
            <div className='div__social__media'>
            <button
            type='button'
            onClick={() =>  window.location.replace(instagram)}  
            >
            <AiOutlineInstagram className='social__icon'/>
            </button>
            <button
            type='button'
            onClick={() =>  window.location.replace(linkedin)}  
            >
            <AiOutlineLinkedin className='social__icon'/>
            </button>
            <button
            type='button'
            onClick={() =>  window.location.replace(github)}  
            >
            <AiOutlineGithub className='social__icon'/>
            </button>
            </div>
    </div>
  )
}
