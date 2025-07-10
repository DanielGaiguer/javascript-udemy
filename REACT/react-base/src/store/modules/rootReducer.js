import { combineReducers } from 'redux';

import exampleReducer from './example/reducer.js';

export default combineReducers({
  example: exampleReducer,
});
 