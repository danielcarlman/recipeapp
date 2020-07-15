import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import '../src/style.css';
import App from './Views/Screen1';
import Title from './Components/Title';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Title />
      <App />
    </React.StrictMode>
    , document.getElementById('root')
  </Provider>
);
