import React, { useState } from 'react';
import style from './style/style.css';
import { useSelector } from 'react-redux';
import Input from '../../Components/Input';

function Screen1() {
  const { title } = useSelector((state) => state.Recipes);
  const [recipeTitle, setRecipeTitle] = useState('');
  return (
    <div className='screen1-container'>
      <h2>Insert a title for you recipe :</h2>
      <h2>{JSON.stringify(title)}</h2>
      <h2>{JSON.stringify(recipeTitle)}</h2>
      <Input setRecipeTitle={setRecipeTitle} />
    </div>
  );
}

export default Screen1;
