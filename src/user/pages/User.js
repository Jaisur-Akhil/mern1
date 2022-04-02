/** @format */

import React from 'react';
import UsersList from '../components/UsersList';

const User = () => {
  const USERS = [
    {
      id: 'Akhil',
      image:
        'https://images.unsplash.com/photo-1636007596622-90bf5679f5dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Akhil',
      places: 8,
    },
    {
      id: 'Arusha',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Arusha',
      places: 7,
    },
    {
      id: 'Shikant',
      image:
        'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbiUyMGhvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Shri',
      places: 1,
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
