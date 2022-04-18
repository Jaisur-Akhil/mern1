/** @format */

import React from 'react';
import './MainHeader.css';
const MainHeader = (props) => {
  return <header className='main-header'>{props.children}</header>;
};

export default MainHeader;
//Props. children is a special props which lets render everything within this wrapper
