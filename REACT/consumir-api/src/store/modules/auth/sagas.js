import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';


function* loginRequest({ payload }) {//Aqui o Saga vai fazer a chamada para a API, usando o payload passado pelo action,
  console.log('saga', payload);
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),//Ao chamar o disapatch, o saga vai ser executado inicialmente aqui, aonde ele vai vincular a acao que foi chamada, com a propria funcao do saga, aonde ele vai realizar a request da API
]);
