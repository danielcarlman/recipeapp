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
  const dispatch = useDispatch();

  function setTitle(title) {
    dispatch(Actions.setTitle(title));
  }

  return (
    <div className='screen1-container'>
      <h2>Insert a title for you recipe :</h2>
      {/* REDUX STORE */}
      {/* <h2>Title: {JSON.stringify(title)}</h2> */}
      {/* ONCHANGE */}
      {/* <h2>OnChange: {JSON.stringify(recipeTitle)}</h2> */}
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

        <Link to='/step2'>
          <Button
            type='submit'
            className={'save-button'}
            Text={'Save'}
            Disabled={!title.length}
          />
        </Link>
      </form>
    </div>
  );
}

export default Screen1;
