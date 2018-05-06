import React from 'react';
import './style.scss';

import ArticleSection from '../../../UI/ActicleSection';
import CallToAction from '../../../UI/CallToAction';

import background from './img/meeting.jpg';

const Investments = () => (
  <ArticleSection classes="investments">
    <section className="pull-left">
      <img src={background} alt="Partners Meeting" />
    </section>
    <section className="pull-right">
      <p>Nos concentramos em nutri relacionamentos fortes e produtivos com nossos parceiros de negócios</p>
      <CallToAction link="#/investments" text="Nossos investimentos" />
    </section>
  </ArticleSection>
);

export default Investments;
