/** @format */

import React, { useState } from 'react';

import './MainNavigation.css';

import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../components/UI Elements/BackDrop/Backdrop';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const open = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  // const close = () => {
  //   setDrawerIsOpen(false);
  // };

  return (
    <React.Fragment>
      {/* {drawerIsOpen && <Backdrop onClick={close} />} */}

      {drawerIsOpen && (
        <SideDrawer>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={open}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>YourPlaces</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
//inside this MainHeader everything will act as prop children
//MainHeader will act as wrapper
