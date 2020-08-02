import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import DropDownMenu from '../../Components/DropDownMenu';
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

      <div className='instructions'>
        <h2>Add ingredients for you recipe :</h2>
      </div>

      <div className='input-container'>
        <Input
          className={'ingredient-input'}
          setRecipeTitle={setIngredientTitle}
          Placeholder={'Type Ingredient Name'}
        />

        <DropDownMenu />

        <Button
          className='add-button'
          Text={'Add'}
          Disabled={!ingredientTitle.length}
          onClick={saveIngredients}
        ></Button>
      </div>

      {/* REDUX STORE */}
      <h3>Ingredients: {JSON.stringify(ingredients)}</h3>
      {/* ONCHANGE */}
      <h3>onChange: {JSON.stringify(ingredientTitle)}</h3>
    </div>
  );
}

export default Screen2;
