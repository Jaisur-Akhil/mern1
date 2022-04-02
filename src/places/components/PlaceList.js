/** @format */

import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UI Elements/Card/Card';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return <div className='place-list center'></div>;
  }
  return <div>PlaceList</div>;
};

export default PlaceList;
