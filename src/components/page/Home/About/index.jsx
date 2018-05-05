import React from 'react';

import ArticleSection from '../ActicleSection';
import ServiceItems from './ServiceItems';


import './style.scss';

const About = () => (
  <ArticleSection classes="about">
    <section className="pull-left">
    A nossa empresa possui mais de <span className="emphasy">50 anos de experiência</span> em varejo e empreendedorismo, combinada com a experiência de um time de executivos multi-disciplinar.
    </section>
    <section className="pull-right">
      <ServiceItems />
    </section>
  </ArticleSection>
);

export default About;
