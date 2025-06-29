import { legacy_createStore as createStore } from 'redux';

const reducer = (state, action) => {
  console.log(action);
  return state;
};

const store = createStore(reducer);

export default store;
