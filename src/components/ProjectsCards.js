import React, { useState } from 'react'
import { SiRedux, SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
import { AiOutlineGithub, AiOutlineRocket } from 'react-icons/ai'
import '../styles/projectCard.css'

export default function ProjectsCards({image, description, url, git}) {
  const [toggleCardMenu, setToggleCardMenu] = useState(false);
  const toogleCard = !toggleCardMenu ? '0' : '30em'
  return (
    <div className='div__card'>
          <div className='div__card__secondary'
                onMouseEnter={ () => { setToggleCardMenu(true)}}
                onMouseLeave={ () => { setToggleCardMenu(false)}}
          >
            <div className='div__redirect' style={{height: toogleCard }}>
            {url && <button
            type='button'
            onClick={ () => window.open(url, '_blank')}
            >
              - Ver projeto
              <AiOutlineRocket/>


            </button>}
            <button
            type='button'
            onClick={ () => window.open(git, '_blank')}
            >
              - Github
              <AiOutlineGithub />

            </button>
            </div>  
            <img src={image} alt="card-img" 
            />
            <h4 className='card__description'>{description}</h4>
            <div className='div__stacks'>
            <SiRedux className='stack'/>
            <SiReact className='stack'/> 
            <SiJavascript className='stack'/> 
            <SiHtml5 className='stack'/> 
            <SiCss3 className='stack'/>              
            </div>
          </div>
    </div>
  )
}
