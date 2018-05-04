import React from 'react';

import './style.scss';

import Icon from '../Icon';

const search = () => (
  <form className="search-container">
    {/* <input type="text" /> */}
    <button className="search-submit" type="submit"><Icon classes="fa-search" /></button>
  </form>
);

export default search;
