import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import '../src/style.css';
import App from './Views/Screen1';
import Title from './Components/Title';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Title />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
