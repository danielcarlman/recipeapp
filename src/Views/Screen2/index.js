import React, { useState } from 'react';
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import { Link } from 'react-router-dom';

function Screen2() {
  const { ingredients } = useSelector((state) => state.Recipes);
  const [ingredientTitle, setIngredientTitle] = useState('');
  const dispatch = useDispatch();
  function saveIngredients() {
    dispatch(Actions.addIngredients(ingredientTitle));
  }

  return (
    <div className='screen2-container'>
      <h2>Add ingredients for you recipe :</h2>
      {/* REDUX STORE */}
      <h2>Ingredients: {JSON.stringify(ingredients)}</h2>
      {/* ONCHANGE */}
      <h2>onChange: {JSON.stringify(ingredientTitle)}</h2>
      <Input setRecipeTitle={setIngredientTitle} />
      <button onClick={saveIngredients}>Add Ingredients</button>
      <Link to='/step3'>
        <button disabled={!ingredients.length}>Next Page</button>
      </Link>
    </div>
  );
}

export default Screen2;
