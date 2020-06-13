// write your custom hook here to control your checkout form
import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialValues, key) => {
  const [values, setValues] = useLocalStorage(initialValues, key);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(initialValues);
    e.preventDefault();
    console.log('test');
    setShowSuccessMessage(true);
  };
  return [values, handleChanges, handleSubmit, showSuccessMessage];
};
