import React from 'react';
import style from './style/style.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <div className='title'>
        <Link to='/'>
          <h1>Yet Another Recipe App</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
