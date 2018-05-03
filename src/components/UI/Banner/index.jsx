import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Banner = props => (
  <div>
    <img src={props.bg} alt={props.title} />
    <section>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <a href={props.link}>Leia mais <Icon classes="fa-chevron-right" /></a>
    </section>
  </div>
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
