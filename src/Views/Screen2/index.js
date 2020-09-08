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
  const { title } = useSelector((state) => state.Recipes);
  const { ingredients } = useSelector((state) => state.Recipes);
  const [ingredientTitle, setIngredientTitle] = useState('');
  const dispatch = useDispatch();

  function updateIngredient(index, value) {
    dispatch(Actions.updateIngredient(index, value));
  }

  function addIngredient(value) {
    dispatch(Actions.addIngredients(value));
  }

  function deleteIngredient(index) {
    dispatch(Actions.deleteIngredients(index));
  }

  function saveIngredients() {
    if (!ingredientTitle.length) {
      return null;
    } else {
      addIngredient(ingredientTitle);
    }
  }

  function renderIngredients() {
    return ingredients.map((ingredient, index) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          className={'ingredient-input'}
          setRecipeTitle={setIngredientTitle}
          value={ingredient}
          onChange={(value) => {
            updateIngredient(index, value);
          }}
        />
        ,
        <Button
          type='submit'
          className='add-button'
          Text={'Delete'}
          onClick={() => {
            deleteIngredient(index);
          }}
        ></Button>
      </form>
    ));
  }

  return (
    <div className='screen2-container'>
      <div className='title-edit-container'>
        <div className='instructions'>
          <h2>Title: {JSON.stringify(title)} </h2>
        </div>
        <Link to='/'>
          <Button className={'arrow-button'} Text={'Edit'} />
        </Link>
      </div>

      <div className='instructions'>
        <h2>Add ingredients for you recipe :</h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // setTitle();
        }}
      >
        <div className='input-container'>
          <Input
            className={'ingredient-input'}
            placeholder={'Example: Chocolate'}
            value={ingredientTitle}
            onChange={(value) => {
              setIngredientTitle(value);
            }}
          />

          <DropDownMenu />

          <Button
            type='submit'
            className='add-button'
            Text={'Add'}
            Disabled={!ingredientTitle.length}
            onClick={() => {
              saveIngredients();
              setIngredientTitle('');
            }}
          ></Button>
        </div>
      </form>

      <div className='ingredients-list'>{renderIngredients()}</div>

      {/* REDUX STORE */}
      <h3>Ingredients: {JSON.stringify(ingredients)}</h3>
      {/* ONCHANGE */}
      <h3>onChange: {JSON.stringify(ingredientTitle)}</h3>
    </div>
  );
}

export default Screen2;
