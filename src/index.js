import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import '../src/style.css';
import Screen1 from './Views/Screen1';
import Title from './Components/Title';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Title path='/' exact component={Screen1} />
        <Switch>
          <Route path='/' exact component={Screen1} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
