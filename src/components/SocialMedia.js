import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

export default function SocialMedia() {
    const linkedin = 'https://www.linkedin.com/in/rodrigo-paz-dev/'
    const instagram = 'https://www.instagram.com/rodrigopazlimas/'
    const github = 'https://github.com/rodrigopaaz'
  return (
    <div className='div__social__media'>
    <button
    type='button'
    onClick={() =>  window.open(instagram, '__blank')}  
    >
    <AiOutlineInstagram className='social__icon'/>
    </button>
    <button
    type='button'
    onClick={() =>  window.open(linkedin, '__blank')}  
    >
    <AiOutlineLinkedin className='social__icon'/>
    </button>
    <button
    type='button'
    onClick={() =>  window.open(github, '__blank')}  
    >
    <AiOutlineGithub className='social__icon'/>
    </button>
    </div>
  )
}
