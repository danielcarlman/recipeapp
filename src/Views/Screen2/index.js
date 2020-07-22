import React, { useState } from 'react';
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';

function Screen2() {
  const { title, ingredients } = useSelector((state) => state.Recipes);
  const [recipeTitle, setRecipeTitle] = useState('');
  const dispatch = useDispatch();
  function saveTitle() {
    dispatch(Actions.setTitle(recipeTitle));
  }

  // function saveIngredients() {
  //   dispatch(
  //     Actions.addIngredients({ name: 'bean', quantity: 170, metric: 'grams' })
  //   );
  // }

  return (
    <div className='screen2-container'>
      <h2>Add ingredients for you recipe :</h2>
      {/* REDUX STORE */}
      <h2>{JSON.stringify(title)}</h2>
      <h2>{JSON.stringify(ingredients)}</h2>
      {/* ONCHANGE */}
      <h2>{JSON.stringify(recipeTitle)}</h2>
      <Input setRecipeTitle={setRecipeTitle} />
      <button onClick={saveTitle}>Next</button>
    </div>
  );
}

export default Screen2;
