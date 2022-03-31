/** @format */

import React from 'react';
import './UserItem.css';

const UserItem = (props) => {
  return (
    <div>
      <li className='user-item'>
        <div className='user-item_content'>
          <div className='user-item_image'>
            <img src={props.image} alt={props.name} />
          </div>
          <div user-item_info>
            <h2>{props.name}</h2>
            <h2>
              {props.placeCount} {props.placeCount === 1 ? ' Place' : ' Places'}
            </h2>
          </div>
        </div>
      </li>
    </div>
  );
};

export default UserItem;
