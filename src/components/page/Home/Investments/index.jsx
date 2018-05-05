import React from 'react';

import ArticleSection from '../ActicleSection';

import CallToAction from '../../../UI/CallToAction';

import './style.scss';

const Investments = () => (
  <ArticleSection classes="investments">
    <section className="pull-left">
      <img src="das.jpg" alt="Partners Meeting" />
    </section>
    <section className="pull-right">
      <p>Nos concentramos em nutri relacionamentos fortes e produtivos com nossos parceiros de negócios</p>
      <CallToAction link="#/investments" text="Nossos investimentos" />
    </section>
  </ArticleSection>
);

export default Investments;
