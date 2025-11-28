import React from 'react'
import HeaderTop from './HeaderTop.tsx';
import HeaderMiddle from './HeaderMiddle.tsx';
import HeaderBottom from './HeaderBottom.tsx';

const Header: React.FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle/>
      <HeaderBottom/>
    </header>
  );
};


export default Header