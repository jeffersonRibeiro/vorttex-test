import React from 'react';

import Icon from '../Icon';

const search = () => (
  <form className="search-container">
    <input type="text" />
    <button type="submit"><Icon classes="fa-search" /></button>
  </form>
);

export default search;
