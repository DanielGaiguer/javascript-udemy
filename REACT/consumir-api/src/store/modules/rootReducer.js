import { combineReducers } from 'redux';

import auth from './auth/reducer.js';

export default combineReducers({//Aqui ele ira ligar todos os reducers das aplicacoes
  auth,
});
