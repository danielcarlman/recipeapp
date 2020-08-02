import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
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

      <div className='arrows-container'>
        <Link to='/'>
          <Button className={'arrow-button'} Text={'<'} />
        </Link>

        <Link to='/step3'>
          <Button
            className={'arrow-button'}
            Disabled={!ingredients.length || ingredients.includes('')}
            Text={'>'}
          />
        </Link>
      </div>

      <div className='input-container'>
        <Input
          setRecipeTitle={setIngredientTitle}
          Placeholder={'Type Ingredient Name'}
        />
      </div>

      <Button
        className='ingredients-button'
        Text={'Add Ingredients'}
        Disabled={!ingredientTitle.length}
        onClick={saveIngredients}
      ></Button>
    </div>
  );
}

export default Screen2;
