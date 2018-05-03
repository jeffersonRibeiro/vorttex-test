import React from 'react';
// import fa from 'font-awesome/css/font-awesome.min.css';

const icon = ({ classes } = this.props) => (
  <i className={['fa', classes].join(' ')} />
);

export default icon;
