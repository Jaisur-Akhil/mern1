/** @format */

import React from 'react';
import UsersList from '../components/UsersList';

const User = () => {
  const USERS = [
    {
      id: 'u1',
      image:
        'https://images.unsplash.com/photo-1500629723675-4d6b0685936a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Akhil',
      places: 3,
    },
  ];
  return (
    <>
      {' '}
      <div>User data to be displayed</div>;
      <UsersList items={USERS} />
    </>
  );
};

export default User;
