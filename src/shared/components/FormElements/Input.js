/** @format */

import React, { useReducer } from 'react';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'Change':
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
  });

  const ChangeHandler = (event) => {
    dispatch({ type: 'Change', val: event.target.value });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={ChangeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={ChangeHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && `form-control--invalid`
      }`}>
      <label htmlFor={props.id}> {props.label} </label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
