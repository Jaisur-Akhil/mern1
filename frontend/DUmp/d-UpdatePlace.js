/** @format */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../src/shared/components/FormElements/Input';
import Button from '../src/shared/components/FormElements/Button';
import './PlaceForm.css';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../src/shared/util/validators';
import { useForm } from '../src/shared/hooks/form-hook';
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

const UpdatePlaces = () => {
  const placeId = useParams().placeId;
  const [formState, InputHandler, setFormData] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    false
  );
  const findId = DUMMY.find((p) => p.id === placeId);
  useEffect(() => {
    setFormData(
      {
        title: {
          value: findId.title,
          isValid: true,
        },
        description: {
          value: findId.description,
          isValid: true,
        },
      },
      true
    );
    // setIsLoading(false);
  }, [setFormData, findId]);

  const updatePlaceSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!findId) {
    return (
      <div className='center'>
        <h2>Could Not Find a place</h2>
      </div>
    );
  }
  return (
    <form
      className='place-form'
      style={{ marginTop: '100px' }}
      onSubmit={updatePlaceSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={InputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />

      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid Desc'
        onInput={InputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlaces;
