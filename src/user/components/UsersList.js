/** @format */

import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UI Elements/Card/Card';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card style={{ alignItems: 'center' }}>
        <h2>No Users Found</h2>
      </Card>
    );
  }

  return (
    <ul className='users-list' style={{ alignItems: 'center' }}>
      {/* /* {}//js expression */}
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
