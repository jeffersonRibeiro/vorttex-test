import React from 'react';

import NavigationItem from './NavigationItem/';

const navigationItems = () => (
  <ul>
    <NavigationItem link="/#QuemSomos" active>QUEM SOMOS</NavigationItem>
    <NavigationItem link="/#NossosInvestimentos" active>NOSSOS INVESTIMENTOS</NavigationItem>
    <NavigationItem link="/#Instituo" active>INSTITUTO</NavigationItem>
    <NavigationItem link="/#Contato" active>CONTATO</NavigationItem>
  </ul>
);

export default navigationItems;
