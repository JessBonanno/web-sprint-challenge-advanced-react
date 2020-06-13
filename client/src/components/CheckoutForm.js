import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, handleChanges, handleSubmit, showSuccessMessage] = useForm(
    initialValue
  );

  return (
    <>
      <form
        className={props.darkMode && 'light-form'}
        data-testid='form'
        onSubmit={handleSubmit}>
        <h2 className={props.darkMode && 'light-h2'} data-testid='form-header'>
          Checkout Form
        </h2>
        <label className={props.darkMode && 'label-light'}>
          First Name:
          <input
            data-testid='firstname'
            name='firstName'
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label className={props.darkMode && 'label-light'}>
          Last Name:
          <input
            data-testid='lastname'
            name='lastName'
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label className={props.darkMode && 'label-light'}>
          Address:
          <input
            data-testid='address'
            name='address'
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label className={props.darkMode && 'label-light'}>
          City:
          <input
            data-testid='city'
            name='city'
            value={values.city}
            onChange={handleChanges}
          />
        </label>
        <label className={props.darkMode && 'label-light'}>
          State:
          <input
            data-testid='state'
            name='state'
            value={values.state}
            onChange={handleChanges}
          />
        </label>
        <label className={props.darkMode && 'label-light'}>
          Zip:
          <input
            data-testid='zip'
            name='zip'
            value={values.zip}
            onChange={handleChanges}
          />
        </label>
        <button
          className={
            props.darkMode ? 'plant-button light-button' : 'plant-button'
          }
          data-testid='button'>
          Checkout
        </button>
      </form>

      {showSuccessMessage && (
        <div
          data-testid='message'
          className={props.darkMode ? 'success-message success-message-light' : 'success-message'}
          data-testid='successMessage'>
          <p>
            You have ordered some plants! Woo-hoo! <span role='img'>🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
