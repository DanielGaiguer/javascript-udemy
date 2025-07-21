import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';


function* loginRequest({ payload }) {//Aqui o Saga vai fazer a chamada para a API, usando o payload passado pelo action,
  try {
    const response = yield call(axios.post, '/tokens', payload);//Vai fazer a requisicao da pagina /tokens para pegar o token de login, e armazenalo dentro do response

    yield put(actions.loginSuccess({ ...response.data }));//Vai lancar a funcao de sucesso ao reducer, para manipular o estado por la

    toast.success('Login realizado com sucesso.');

    history.push(payload.prevPath);
  } catch(e) {
    toast.error('Usuario ou senha Inválidos.');

    yield put(actions.loginFailure);//Vai lancar a funcao de erro ao reducer, caso tenha algum problema no meion do caminho
  }
}

function persistRehydrate({ payload }) {//O parâmetro payload contém os dados restaurados do estado da store do redux
  const token = get(payload, 'auth.token', '');//Vai verificar se dentro do estado existe um token, se sim, ele e setado na variavel, e jogado dentro do axios, isso e necessario por que apos o usuario atualizar a pagina, o axios.defaults e resetado, e o token nao se mantem nele, mas continua se mantendo dentro do estado da aplicacao, ou seja, sempre que o redux persist mandar a action setada, nos vamos buscar o token no estado, e seta-lo dentro do axios novamente
  if(!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;//Vai colocar o token dentro do cabecalho de todas as requisicoes axios, isso ocorrera todas as vezes que o usuario resetar a pagina
};

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),//Ao chamar o disapatch, o saga vai ser executado inicialmente aqui, aonde ele vai vincular a acao que foi chamada, com a propria funcao do saga, aonde ele vai realizar a request da API
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)//types.PERSIST_REHYDRATE: é o tipo da ação disparada automaticamente pelo redux-persist quando o estado persistido da aplicação for reidratado (ou seja, carregado do armazenamento), Isso e necessario por que se o token for jogado no axios assim que a requisicao for feita, no caso no loginRequest, quando o usuario atualizar a pagina, a requisicao nao vai ser feita novamente, assim o token nao vai estar no redux persist, pedindo ao usuario para realizar login novamente, pois axios.defaults e resetado apos o reload.
  
  //Sempre que o redux-persist recupera os dados do localStorage, ele dispara a action PERSIST_REHYDRATE, que pode ser interceptada por uma saga (como persistRehydrate) para configurar coisas como o token no Axios.
]);
