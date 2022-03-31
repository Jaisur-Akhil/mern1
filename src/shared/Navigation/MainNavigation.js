/** @format */

import React from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className='main-navigation_menu-btn'>
        <span />
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation_title'>
        <Link to='/'>YourPlaces</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
//inside this MainHeader everything will act as prop children
//MainHeader will act as wrapper
