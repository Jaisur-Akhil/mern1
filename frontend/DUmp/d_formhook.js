/** @format */

import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'Input_Change':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case 'Set_Data':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });
  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'Input_Change',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'Set_Data',
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, InputHandler, setFormData];
};

export default useForm;
/*
//customer hooks should always start with lower useName ie UseForm
{
    title: { value: '', isValid: false },
    description: { value: '', isValid: false },
    address: { value: '', isValid: false },
  }
  
  */
