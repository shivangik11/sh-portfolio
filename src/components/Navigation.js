import React from 'react';
import { Navigation } from '../styles/StyledComponents';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <Navigation>
      <Link href="mailto:shivangik1599@gmail.com" to="/contact">CONTACT</Link>
    </Navigation>
  );
};

export default NavigationMenu;




