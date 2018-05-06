import React from 'react';
import PropTypes from 'prop-types';

const Address = props => (
  <p className={['address', props.classes].join(' ')}>
    Av. Jõao da Silva 2055 <br />
    15 andar, Jardim Paulistano <br />
    São Paulo - Sp | Brasil <br />
    CEP 01452-001 <br />
  </p>
);

Address.propTypes = {
  classes: PropTypes.string,
};

Address.defaultProps = {
  classes: '',
};

export default Address;
