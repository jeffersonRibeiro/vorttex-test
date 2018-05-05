import React from 'react';

import CenterAll from '../../../../UI/CenterAll';

import './style.scss';

import ServiceItem from './ServiceItem';

const ServiceItems = () => (
  <div className="service-items">
    <ServiceItem
      title="Ativos estratégicos"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum dolorem atque odio tenetur ad at."
    />
    <ServiceItem
      title="Private equity"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum dolorem atque odio tenetur ad at."
    />
    <ServiceItem
      title="Real state"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum dolorem atque odio tenetur ad at."
    />
    <ServiceItem
      title="Asset management"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum dolorem atque odio tenetur ad at."
    />
  </div>
);

export default ServiceItems;