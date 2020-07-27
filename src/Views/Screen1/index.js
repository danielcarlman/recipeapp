import React, { useState } from 'react';
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import { Link } from 'react-router-dom';

function Screen1() {
  const { title } = useSelector((state) => state.Recipes);
  const [recipeTitle, setRecipeTitle] = useState('');
  const dispatch = useDispatch();
  function saveTitle() {
    dispatch(Actions.setTitle(recipeTitle));
  }

  return (
    <div className='screen1-container'>
      <h2>Insert a title for you recipe :</h2>
      {/* REDUX STORE */}
      <h2>Title: {JSON.stringify(title)}</h2>
      {/* ONCHANGE */}
      <h2>OnChange: {JSON.stringify(recipeTitle)}</h2>

      <div className='input-container'>
        <Input setRecipeTitle={setRecipeTitle} />
        <Link to='/step2'>
          <button disabled={!title.length}>Next</button>
        </Link>
      </div>

      <button onClick={saveTitle}>Change Title</button>
    </div>
  );
}

export default Screen1;
