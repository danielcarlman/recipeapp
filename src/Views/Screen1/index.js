import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';
import { Actions } from '../../redux/reducers/Recipes';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';

function Screen1() {
  const { title } = useSelector((state) => state.Recipes);
  const [recipeTitle, setRecipeTitle] = useState(title);
  const dispatch = useDispatch();
  function saveTitle() {
    dispatch(Actions.setTitle(recipeTitle));
  }

  return (
    <div className='screen1-container'>
      <h2>Insert a title for you recipe :</h2>
      {/* REDUX STORE */}
      {/* <h2>Title: {JSON.stringify(title)}</h2> */}
      {/* ONCHANGE */}
      {/* <h2>OnChange: {JSON.stringify(recipeTitle)}</h2> */}

      <div className='input-container'>
        <Input
          className={'title-input'}
          setRecipeTitle={setRecipeTitle}
          Placeholder={'Example: Chocolate Cake'}
          Value={title}
        />
      </div>

      <Link to='/step2'>
        <Button
          className={'save-button'}
          Text={'Save'}
          Disabled={!recipeTitle.length}
          onClick={saveTitle}
        />
      </Link>
    </div>
  );
}

export default Screen1;
