import React, { useState } from 'react';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import DropDownMenu from '../../Components/DropDownMenu';
// import { Link } from 'react-router-dom';

function Screen1() {
  const dispatch = useDispatch();
  const { title, ingredients } = useSelector((state) => state.Recipes);
  const [ingredientTitle, setIngredientTitle] = useState('');
  const [screen, toggleScreen] = useState(false);

  function setTitle(title) {
    dispatch(Actions.setTitle(title));
  }

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

  // Renders Title Screen
  if (!screen) {
    return (
      <div className='screen1-container'>
        <h2>Insert a title for you recipe :</h2>
        {/* REDUX STORE */}
        {/* <p>Title: {JSON.stringify(title)}</p> */}
        {/* ONCHANGE */}
        {/* <p>OnChange: {JSON.stringify(recipeTitle)}</p> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // setTitle();
          }}
        >
          <div className='input-container'>
            <Input
              className={'title-input'}
              onChange={(value) => {
                setTitle(value);
              }}
              placeholder={'Example: Chocolate Cake'}
              value={title}
            />
          </div>

          <Button
            type='submit'
            className={'save-button'}
            Text={'Save'}
            Disabled={!title.length}
            onClick={() => {
              toggleScreen(!screen);
            }}
          />
        </form>
      </div>
    );
  }

  // Renders Ingredients Screen
  if (screen) {
    return (
      <div className='screen1-container'>
        <div className='title-edit-container'>
          <div className='instructions'>
            <h2>Title: {JSON.stringify(title).replaceAll('"', '')}</h2>
          </div>

          <Button
            className={'edit-button'}
            Text={'Edit'}
            onClick={() => {
              toggleScreen(!screen);
            }}
          />
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
        <p>Ingredients: {JSON.stringify(ingredients)}</p>
        {/* ONCHANGE */}
        <p>onChange: {JSON.stringify(ingredientTitle)}</p>
      </div>
    );
  }
}

export default Screen1;
