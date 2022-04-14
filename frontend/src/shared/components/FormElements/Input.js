/** @format */

import React, { useReducer, useEffect } from 'react';
import './Input.css';
import { validate } from '../UI Elements/util/validators';
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'Change':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'Touch':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isTouched: false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const ChangeHandler = (event) => {
    dispatch({
      type: 'Change',
      val: event.target.value,
      validators: props.validators,
    });
  };
  const touch = () => {
    dispatch({ type: 'Touch' });
  };
  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={ChangeHandler}
        onBlur={touch}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={ChangeHandler}
        onBlur={touch}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && `form-control--invalid`
      }`}>
      <label htmlFor={props.id}> {props.label} </label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
