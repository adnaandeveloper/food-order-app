import React, { Fragment } from 'react';
import MealsImage from './../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1> React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={MealsImage} alt="meals image" />
      </div>
    </Fragment>
  );
};

export default Header;
