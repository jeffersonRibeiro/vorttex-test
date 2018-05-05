import React from 'react';

import './style.scss';

const ServiceItem = props => (
  <div className="service-item">
    <p className="title">{props.title}</p>
    <p className="subtitle">{props.subtitle}</p>
  </div>
);

export default ServiceItem;
