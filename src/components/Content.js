import React from 'react'
import '../styles/content.css';
import Portifolio from '../pages/Portifolio';
import About from './About';
import Stacks from './Stacks';
import Footer from './Footer';

export default function Content() {
  return (
    <div className='div__content'>
     <About />
      <Stacks />
      <Portifolio />
      <Footer />
    </div>
  )
}
