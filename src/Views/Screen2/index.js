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
    if (!ingredientTitle.length) {
      return null;
    } else {
      dispatch(Actions.addIngredients(ingredientTitle));
    }
  }

  return (
    <div className='screen2-container'>
      <h2>Add ingredients for you recipe :</h2>
      {/* REDUX STORE */}
      <h2>Ingredients: {JSON.stringify(ingredients)}</h2>
      {/* ONCHANGE */}
      <h2>onChange: {JSON.stringify(ingredientTitle)}</h2>

      <div className='input-container'>
        <Link to='/'>
          <button className='button' alt='Back'>
            &lt;
          </button>
        </Link>
        <Input setRecipeTitle={setIngredientTitle} />
        <Link to='/step3'>
          <button
            className='button'
            disabled={!ingredients.length || ingredients.includes('')}
            alt='Next'
          >
            &gt;
          </button>
        </Link>
      </div>

      <button
        className='button'
        disabled={!ingredientTitle.length}
        onClick={saveIngredients}
      >
        Add Ingredients
      </button>
    </div>
  );
}

export default Screen2;
