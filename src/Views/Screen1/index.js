import React from 'react';
import style from './style/style.css';
import Input from '../../Components/Input';

function Screen1() {
  return (
    <div className='screen1-container'>
      <h2>What's the name of your recipe?</h2>
      <Input />
    </div>
  );
}

export default Screen1;
