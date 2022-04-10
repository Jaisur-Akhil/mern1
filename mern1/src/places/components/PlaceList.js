/** @format */

import React from 'react';
import './PlaceList.css';
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UI Elements/Card/Card';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center' style={{ marginTop: '10%' }}>
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className='place-list'>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          discription={place.discription}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
