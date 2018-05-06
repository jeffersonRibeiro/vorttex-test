import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const ServiceItem = props => (
  <div className="service-item">
    <p className="title">{props.title}</p>
    <p className="subtitle">{props.subtitle}</p>
  </div>
);

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ServiceItem;
