import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';

function DropDownMenu() {
  return (
    <select name='units' className='dropdown-item'>
      <option selected>unit</option>
      <option id='tablespoon'>tbsp</option>
      <option id='teaspoon'>tsp</option>
      <option id='cups'>cups</option>
      <option id='milliliter'>ml</option>
      <option id='liter'>L</option>
      <option id='gallon'>gal</option>
      <option id='pint'>pint</option>
      <option id='gram'>g</option>
      <option id='ounce'>oz</option>
      <option id='pound'>lb</option>
      <option id='milligram'>mg</option>
      <option id='gram'>g</option>
      <option id='kilogram'>kg</option>
    </select>
  );
}

export default DropDownMenu;
