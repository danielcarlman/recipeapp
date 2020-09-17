import React, { useState } from 'react';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
// import { Link } from 'react-router-dom';

function Screen1() {
  const dispatch = useDispatch();
  const { title, ingredients } = useSelector((state) => state.Recipes);
  const [ingredientTitle, setIngredientTitle] = useState('');
  const [screen, changeScreen] = useState('titleScreen');
  const [editIndex, setEditIndex] = useState(-1);

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
        {editIndex !== index && [
          <div
            className='ingredient-preview'
            onDoubleClick={() => {
              setEditIndex(index);
            }}
          >
            <h2>{ingredient}</h2>
          </div>,
        ]}

        {editIndex === index && (
          <Input
            className={'ingredient-input'}
            setRecipeTitle={setIngredientTitle}
            value={ingredient}
            onChange={(value) => {
              updateIngredient(index, value);
            }}
          />
        )}

        <div className='buttons'>
          {editIndex !== index ? (
            <Button
              type='submit'
              className='add-button'
              onClick={() => {
                setEditIndex(index);
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              type='submit'
              className='add-button'
              onClick={() => {
                setEditIndex(-1);
              }}
              Disabled={!ingredients[index].length}
            >
              OK
            </Button>
          )}

          <Button
            type='submit'
            className='add-button'
            onClick={() => {
              deleteIngredient(index);
            }}
          >
            X
          </Button>
        </div>
      </form>
    ));
  }

  // Renders Title Screen
  if (screen === 'titleScreen') {
    return (
      <div className='container'>
        <h2 className='instructions'>Insert a title for you recipe :</h2>
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
            Disabled={!title.length}
            onClick={() => {
              changeScreen('ingredientsScreen');
            }}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }

  // Renders Ingredients Screen
  if (screen === 'ingredientsScreen') {
    return (
      <div className='container'>
        <div className='title-edit-container'>
          <div className='instructions'>
            <h2 className='title-text'>Title: {title}</h2>
          </div>

          <Button
            className={'edit-button'}
            onClick={() => {
              changeScreen('titleScreen');
            }}
          >
            Edit{' '}
          </Button>
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

            <Button
              type='submit'
              className='add-button'
              Disabled={!ingredientTitle.length}
              onClick={() => {
                saveIngredients();
                setIngredientTitle('');
              }}
            >
              +
            </Button>
          </div>
        </form>

        <div className='ingredients-list'>{renderIngredients()}</div>

        {/* REDUX STORE */}
        {/* <p>Ingredients: {JSON.stringify(ingredients)}</p> */}
        {/* ONCHANGE */}
        {/* <p>onChange: {JSON.stringify(ingredientTitle)}</p> */}
      </div>
    );
  }
}

export default Screen1;
