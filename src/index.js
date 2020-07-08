import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import App from './Views/Screen1';
import Title from './Components/Title';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
