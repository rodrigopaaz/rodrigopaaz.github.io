import React from 'react'
import '../styles/footer.css'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <div className='div__footer'>
        <div className='footer__title'>
            <p>Não deixe escapar da sua vida aquilo que te faz feliz!!!</p>
            </div>
        <div className='footer__social'>
            <h4>Contatos</h4>
            <SocialMedia />
        </div>
    </div>
  )
}
