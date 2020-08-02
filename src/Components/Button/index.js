import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';

function Button({ Disabled, onClick, className, Text }) {
  return (
    <button className={className} disabled={Disabled} onClick={onClick}>
      {Text}
    </button>
  );
}

export default Button;
