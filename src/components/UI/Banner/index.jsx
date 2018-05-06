import React from 'react';
import PropTypes from 'prop-types';

import CallToAction from '../CallToAction';

const Banner = props => (
  <React.Fragment>
    <img src={props.bg} alt={props.title} />
    <section>
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
      <CallToAction link={props.link} />
    </section>
  </React.Fragment>
);

Banner.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
};

Banner.defaultProps = {
  title: '',
  subtitle: '',
  link: '',
};

export default Banner;
