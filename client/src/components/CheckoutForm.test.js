import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  const container = render(<CheckoutForm />);
  const formHeader = container.getByTestId(/form-header/i);
  expect(formHeader).toBeInTheDocument();
});

test('form shows success message on submit with form details', async () => {
    const container = render(<CheckoutForm />);
    const firstname = container.getByTestId(/firstname/i);
    const lastname = container.getByTestId(/lastname/i);
    const address = container.getByTestId(/address/i);
    const city = container.getByTestId(/city/i);
    const state = container.getByTestId(/state/i);
    const zip = container.getByTestId(/zip/i);
    const button = container.getByTestId(/button/i);

    // Act
    fireEvent.change(firstname, { target: { value: 'joe' } });
    fireEvent.change(lastname, { target: { value: 'doe' } });
    fireEvent.change(address, { target: { value: '123 this way' } });
    fireEvent.change(city, { target: { value: 'city' } });
    fireEvent.change(state, { target: { value: 'state' } });
    fireEvent.change(zip, { target: { value: 'zip' } });

    fireEvent.submit(button);
    // Assert
    await waitFor(() => {
      const message = container.getByTestId(/message/i);
      expect(message).toBeInTheDocument();
    });
  
});
