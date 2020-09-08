import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './style/style.css';

function Button({ Disabled, onClick, className, children }) {
  return (
    <button className={className} disabled={Disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
