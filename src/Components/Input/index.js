import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';

function Field({ setRecipeTitle, className, Placeholder, Value }) {
  function updateValue(event) {
    setRecipeTitle(event.target.value);
  }
  return (
    <form>
      <input
        maxLength='60'
        className={className}
        onChange={updateValue}
        placeholder={Placeholder}
        defaultValue={Value}
      />
    </form>
  );
}

export default Field;
