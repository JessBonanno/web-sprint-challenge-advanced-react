import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';

import PlantList from './components/PlantList';
import ShoppingCart from './components/ShoppingCart';
import CheckoutForm from './components/CheckoutForm';

import './App.css';

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode('dark', true);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  return (
    <div>
      <Router>
        <nav className={darkMode ? 'container container-light' : 'container'}>
          <h1 className={darkMode && 'light-h1'}>
            React Plants <span role='img'>🌿</span>
          </h1>
          <div
            className={
              darkMode
                ? 'dark-mode__toggle dark-mode__toggle-light'
                : 'dark-mode__toggle'
            }>
            <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
          </div>
          <ul className={darkMode ? 'steps steps-light' : 'steps'}>
            <li>
              <NavLink exact to='/'>
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart'>
                Cart
                <span
                  className={
                    darkMode ? 'cart-badge cart-badge-light' : 'cart-badge'
                  }>
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path='/'
          render={() => <PlantList addToCart={addToCart} darkMode={darkMode} />}
        />
        <Route
          path='/cart'
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              darkMode={darkMode}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route
          path='/checkout'
          render={(props) => <CheckoutForm {...props} darkMode={darkMode} />}
        />
      </Router>
    </div>
  );
}

export default App;
