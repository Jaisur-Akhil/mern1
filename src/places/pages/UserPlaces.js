/** @format */

import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY = [
  {
    id: 'p1',
    title: 'Kandivali Station',
    description: 'Multiple Dogs',
    imageUrl:
      'https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    address:
      ' Swami Vivekanand Road, Parekh Nagar, Kandivali West, Mumbai, Maharashtra 400067 ',
    location: {
      lat: 19.2096466,
      lng: 72.7937044,
    },
    creator: 'Akhil',
  },
  {
    id: 'p2',
    title: 'Borivali Station',
    description: 'Hungry People',
    imageUrl:
      'https://images.unsplash.com/photo-1588495297064-a85ab4badf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVuZ3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    address: ' Sundar Nagar, Borivali West, Mumbai, Maharashtra 400092 ',
    location: {
      lat: 19.2335295,
      lng: 72.8216415,
    },
    creator: 'Arusha',
  },

  {
    id: 'p3',
    title: 'Dadar Station',
    description: 'Provide Food',
    imageUrl:
      'https://images.unsplash.com/photo-1588495297064-a85ab4badf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVuZ3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    address: ' Western Railway Station, Dadar, Mumbai, Maharashtra ',
    location: {
      lat: 9.0188683,
      lng: 72.8301672,
    },
    creator: 'Shrikant',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
//fetch and render all places of user.
//use as a funtions and can gives acces to parameters
//will return an object
