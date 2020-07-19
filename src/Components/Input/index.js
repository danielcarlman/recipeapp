import React from 'react';
import style from './style/style.css';

function Field({ setRecipeTitle }) {
  function updateValue(event) {
    setRecipeTitle(event.target.value);
  }
  return (
    <form>
      <input maxLength='60' className='field' onChange={updateValue} />
    </form>
  );
}

export default Field;
