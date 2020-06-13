import React from 'react';

/********* DO NOT DO ANYTHING IN THIS COMPONENT *********/

export default function ShoppingCart(props) {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);
  return (
    <div className='cart'>
      {props.cart.map((plant) => (
        <div
          className={
            props.darkMode ? 'plant-card plant-card-light' : 'plant-card'
          }
          key={plant.id}>
          <img className='plant-image' src={plant.img} alt={plant.name} />
          <div
            className={
              props.darkMode
                ? 'plant-details light-plant-details'
                : 'plant-details'
            }>
            <h2
              className={props.darkMode ? 'plant-name light-h2' : 'plant-name'}>
              {plant.name}
            </h2>
            <p className={props.darkMode && 'light-p'}>${plant.price}</p>
            <button
              className={
                props.darkMode ? 'plant-button light-button' : 'plant-button'
              }
              onClick={() => props.removeFromCart(plant)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div
        className={
          props.darkMode
            ? 'checkout-section checkout-section-light'
            : 'checkout-section'
        }>
        <p className='total'>Total: ${total}</p>
        <button
              className={
                props.darkMode ? 'plant-button light-button' : 'plant-button'
              }
          onClick={() => props.history.push('/checkout')}>
          Checkout
        </button>
      </div>
    </div>
  );
}
