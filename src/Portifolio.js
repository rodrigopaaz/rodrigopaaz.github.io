import React from 'react'
import objectRepo from './Repositories'
import './portifolio.css'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import  Carousel  from 'react-bootstrap/Carousel';

export default function Portifolio() {
    const history = useHistory();
  return (
    <div className='div__portifolio'>
    <Carousel fade>
        {objectRepo.map((e, index)=> (
            <Carousel.Item key={ index }>

                <img
                  className="d-block w-100"
                  data-testid={ `${index}-recommendation-card` }
                  src={ e.image }
                  alt={ index }
                />
                <Carousel.Caption>
                <a href={e.url}>Link do projeto - {e.descricao}</a>
                </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      <button
        type='button'
        onClick={()=>history.push('/')}
        >
            Voltar
        </button>
      </div>
  );
   /*  <div className='div__portifolio'>
        {
            objectRepo.map((e, i)=>{
                console.log(e.image);
                return(
                <div 
                className='dv__projeto'
                key={i}
                >  
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={e.image} alt={e.descricao}
        />
        <Carousel.Caption>
        <a href={e.url}>{e.descricao}</a>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
                <a href={e.url}>{e.descricao}</a>
                <img src={e.image} alt={e.descricao} />
                </div>
                )
})

        }
        <button
        type='button'
        onClick={()=>history.push('/')}
        >
            Voltar
        </button>
        
    </div> */
}
