/** @format */

import React from 'react';
import './Backdrop.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;


/**
 * /*
 * Absolute Length
 *
 * 1px = 1/96 of an inch
 * 1024*768 dpi (dots per inch ) 96
 * 1cm = 37.8pxs
 * 1mm = 3.78pxs
 * 1inch = 96px or 2.54cms
 * 1point = 1.33px
 * 1pc(picas) = 16pxs
 *
 * Reltive Length Units
 *
 * em takes the property of its parent elemts
 *
 * .container{
 *     font-size = 16px;
 * }
 * .container p {
 *     font-size : 1em;
 * }
 * .container h2{
 *     font-size : 3em
 * }
 *
 * p = 16px
 * h2 = 16*3 = 48px
 * h3 = 16*2 = 32px
 *
 * rem - root em
 * root - default fonst size of browser ie 16px
 *
 * p{ font-size : 1.25rem}
 * 16*1.25 = 20px
 *
 * % percentage
 * div{width : 400px}
 * div p{ width : 75%} : 300px
 *
 * @format
 */
