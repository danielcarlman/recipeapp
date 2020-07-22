import React, { useState } from 'react';
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';

function Screen2() {
  const { title, ingredients } = useSelector((state) => state.Recipes);
  const [ingredientTitle, setIngredientTitle] = useState('');
  const dispatch = useDispatch();
  function saveTitle() {
    dispatch(Actions.addIngredients(ingredientTitle));
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
      <h2>Ingredients: {JSON.stringify(ingredients)}</h2>
      {/* ONCHANGE */}
      <h2>onChange: {JSON.stringify(ingredientTitle)}</h2>
      <Input setRecipeTitle={setIngredientTitle} />
      <button onClick={saveTitle}>Next</button>
    </div>
  );
}

export default Screen2;
