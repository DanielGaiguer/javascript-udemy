import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_REQUEST: {
      console.log('reducer', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
};
