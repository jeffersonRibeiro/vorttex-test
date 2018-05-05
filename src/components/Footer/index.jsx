import React from 'react';

import './style.scss';

import NavigationItems from '../Navigation/NavigationItems';
import Logo from '../UI/Logo';
import CenterAll from '../UI/CenterAll';

const Footer = () => (
  <footer>
    <CenterAll>
      <div className="cf additional-info">
        <Logo classes="pull-left" />
        <p className="address pull-right">
          Av. Jõao da Silva 2055 <br />
          15 andar, Jardim Paulistano <br />
          São Paulo - Sp | Brasil <br />
          CEP 01452-001 <br />
        </p>
      </div>
      <div className="cf signature">
        <p className="copyright pull-left">@ Logo 2018 VORTTEX CO</p>
        <nav className="pull-right"><NavigationItems /></nav>
      </div>
    </CenterAll>
  </footer>
);

export default Footer;
