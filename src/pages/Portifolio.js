import React, { useEffect, useState } from 'react';
import objectRepo from '../utils/Repositories';
import '../styles/portifolio.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProjectsCards from '../components/ProjectsCards';

export default function Portifolio() {
  const [carouselConfig, setCarouselConfig] = useState({});
  const [module, setModule] = useState('');

  const changeCarouselSize = () => {
    if (window.innerWidth <= 450) return setCarouselConfig({ padding: 0, perPage: 1 });
    if (window.innerWidth <= 1599) return setCarouselConfig({ padding: '20px', perPage: 2 });
    return setCarouselConfig({ padding: '100px', perPage: 2 });
  };

  useEffect(() => {
    changeCarouselSize();
  }, []);

  return (
    <div className="main__div__portifolio" id="projetos">
      <h4 className="portifolio__title">Projetos</h4>
      <div className="div__portifolio">
        <table className="modules__table">
          <tbody>
            <tr>
              <th>
                <button type="button" onClick={() => setModule('')}>
                  Todos
                </button>
              </th>
              <th>
                <button type="button" onClick={() => setModule('frontend')}>
                  Front-End
                </button>
              </th>
              <th>
                <button type="button" onClick={() => setModule('backend')}>
                  Back-End
                </button>
              </th>
              <th>
                <button type="button" onClick={() => setModule('fullstack')}>
                  Full-Stack
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <Splide
          options={{
            rewind: true,
            gap: '10rem',
            perPage: carouselConfig.perPage,
            width: '97vw',
            speed: 2000,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            padding: carouselConfig.padding,
          }}
        >
          {objectRepo
            .filter((repo) => (module ? repo.modulo === module : repo.modulo))
            .sort((a, b) => a.descricao.localeCompare(b.descricao))
            .map((e, index) => (
              <SplideSlide key={index}>
                <div className="div__cards__portifolio">
                  <ProjectsCards image={e.image} description={e.descricao} url={e.url} git={e.github} />
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
}
