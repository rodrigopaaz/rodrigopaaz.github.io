import React, { useContext } from 'react'
import './sideBar.css';
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import AppContext from './context/Context';

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
        <button
        type='button'
        >
            Portifólio</button>
        <button
        type='button'
        >
            Sobre Mim</button>
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
