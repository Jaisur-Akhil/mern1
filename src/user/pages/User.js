/** @format */

import React from 'react';
import UsersList from '../components/UsersList';

const User = () => {
  const USERS = [
    {
      id: 'u1',
      image: 'https://unsplash.com/photos/YOk0D5sz3e4',
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
