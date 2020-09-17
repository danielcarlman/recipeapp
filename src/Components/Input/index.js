import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';

function Field({ value, onChange, ...rest }) {
  return (
    <input
      maxLength='25'
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
      {...rest}
    />
  );
}

export default Field;
