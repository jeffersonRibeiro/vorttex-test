import React from 'react';

import CenterAll from '../../../UI/CenterAll';
import ServiceItems from './ServiceItems';

import './style.scss';

const About = () => (
  <article className="cf article">
    <CenterAll >
      <section className="pull-left">
      A nossa empresa possui mais de <span className="emphasy">50 anos de experiência</span> em varejo e empreendedorismo, combinada com a experiência de um time de executivos multi-disciplinar.
      </section>
      <section className="pull-right">
        <ServiceItems />
      </section>
    </CenterAll>
  </article>
);

export default About;
