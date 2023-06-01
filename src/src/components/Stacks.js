import React from 'react'
import { SiJavascript, SiCss3, SiHtml5, SiReact,
SiRedux, SiGit, SiMysql, SiExpress, SiTypescript, SiDocker } from 'react-icons/si'


import '../styles/stacks.css';

export default function Stacks() {
  return (
    <div class="main__stacks" id='stacks'>
        <div className='stacks__title'>
          <h4>Minhas Stacks</h4>
        </div>
        <div className='stacks'>
        <div className='div__card__stack'><SiJavascript/>Java Script</div>
        <div className='div__card__stack'><SiCss3/>Css</div>
        <div className='div__card__stack'><SiHtml5/>Html</div>
        <div className='div__card__stack'><SiReact/>React</div>
        <div className='div__card__stack'><SiRedux/>Redux</div>
        <div className='div__card__stack'><SiGit/>Git</div>
        <div className='div__card__stack'><SiMysql/>Mysql</div>
        <div className='div__card__stack'><SiExpress/>Express</div>
        <div className='div__card__stack'><SiTypescript/>Typescript</div>
        <div className='div__card__stack'><SiDocker/>Docker</div>
        </div>
</div>
  )
}
