/** @format */

import React from 'react';
import Input from './../../shared/components/FormElements/Input';
import './NewPlace.css';
const NewPlace = () => {
  return (
    <React.Fragment>
      <form className='place-form'>
        <div>Hello World</div>
        <Input element='input' type='text' label='Title' />
      </form>
    </React.Fragment>
  );
};

export default NewPlace;
