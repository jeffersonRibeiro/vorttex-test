import React from 'react';
import './style.scss';

import Icon from '../../UI/Icon';

const Search = () => (
  <form className="search-container">
    {/* <input type="text" /> */}
    <button className="search-submit" type="submit"><Icon classes="fa-search" /></button>
  </form>
);

export default Search;
