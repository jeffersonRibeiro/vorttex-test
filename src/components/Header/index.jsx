import React from 'react';

import NavigationItems from '../Navigation/NavigationItems';
import Search from '../UI/Search';
import LanguageSelect from '../UI/LanguageSelect';


const header = () => (
  <header>
    <div>Logo</div>
    <nav>
      <NavigationItems />
    </nav>
    <Search />
    <LanguageSelect />
  </header>
);

export default header;
