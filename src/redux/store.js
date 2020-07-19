import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const middlewares = [];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
