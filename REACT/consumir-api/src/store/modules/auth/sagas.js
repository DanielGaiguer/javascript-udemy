import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';


function* loginRequest({ payload }) {//Aqui o Saga vai fazer a chamada para a API, usando o payload passado pelo action,
  try {
    const response = yield call(axios.post, '/tokens', payload);//Vai fazer a requisicao da pagina /tokens para pegar o token de login, e armazenalo dentro do response

    yield put(actions.loginSuccess({ ...response.data }));//Vai lancar a funcao de sucesso ao reducer, para manipular o estado por la

    toast.success('Login realizado com sucesso.');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;//Vai colocar o token dentro do cabecalho de todas as requisicoes axios.

    history.push(payload.prevPath);
  } catch(e) {
    toast.error('Usuario ou senha Inválidos.');

    yield put(actions.loginFailure);//Vai lancar a funcao de erro ao reducer, caso tenha algum problema no meion do caminho
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),//Ao chamar o disapatch, o saga vai ser executado inicialmente aqui, aonde ele vai vincular a acao que foi chamada, com a propria funcao do saga, aonde ele vai realizar a request da API
]);
