import React from 'react'
import objectRepo from './Repositories'
import './portifolio.css'
import { useHistory } from 'react-router-dom'

export default function Portifolio() {
    const history = useHistory();
  return (
    <div className='div__portifolio'>
        {
            objectRepo.map((e, i)=>{
                console.log(i);
                return(
                <a href={e.url} key={i}>{e.descricao}</a>
                )
})
        }
        <button
        type='button'
        onClick={()=>history.push('/')}
        >
            Voltar
        </button>
    </div>
  )
}
