/** @format */

import React from 'react';
import Avatar from '../../shared/components/UI Elements/Avatar/Avatar';
import Card from '../../shared/components/UI Elements/Card/Card';
import { Link } from 'react-router-dom';
import './UserItem.css';

export const UserItem = (props) => {
  return (
    <li className='user-item'>
      <div>
        <Card className='user-item__content'>
          <Link to={`/${props.id}/places `}>
            <div className='user-item__image'>
              {/* <img src={props.image} alt={props.name} />66664 */}
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className='user-item__info'>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
};

export default UserItem;

//card  + avatar is a presentational component , dumb
//other are smart component/ active / StateFull  with some logic init
