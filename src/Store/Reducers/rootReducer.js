import { combineReducers } from 'redux';

import recipeItems from './recipes';

const rootReducer = combineReducers({
  recipeItems,
});

export default rootReducer;
