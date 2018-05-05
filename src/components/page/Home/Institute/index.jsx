import React from 'react';

import ArticleSection from '../../../UI/ActicleSection';

import CallToAction from '../../../UI/CallToAction';

import './style.scss';

const Institute = () => (
  <ArticleSection classes="institute">
    <section className="pull-left">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nisi quis erat pulvinar, vitae condimentum ipsum laoreet. Praesent suscipit justo sit amet nunc ullamcorper malesuada.</p>
      <CallToAction link="#/institute" />
    </section>
    <section className="pull-right">
      <img src="http://localhost:8001/images/institute.jpg" alt="institute" />
    </section>
  </ArticleSection>
);

export default Institute;
