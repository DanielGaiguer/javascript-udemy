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

    history.push(payload.prevPath);//Apos realizar o login, vai redirecionar o usuario a pagina que ele estava tentando acessar, guardada dentro de payload.prevPath
  } catch(e) {
    toast.error('Usuario ou senha Inválidos.');

    yield put(actions.loginFailure());//Vai lancar a funcao de erro ao reducer, caso tenha algum problema no meion do caminho
  }
}

function persistRehydrate({ payload }) {//O parâmetro payload contém os dados restaurados do estado da store do redux
  const token = get(payload, 'auth.token', '');//Vai verificar se dentro do estado existe um token, se sim, ele e setado na variavel, e jogado dentro do axios, isso e necessario por que apos o usuario atualizar a pagina, o axios.defaults e resetado, e o token nao se mantem nele, mas continua se mantendo dentro do estado da aplicacao, ou seja, sempre que o redux persist mandar a action setada, nos vamos buscar o token no estado, e seta-lo dentro do axios novamente
  if(!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;//Vai colocar o token dentro do cabecalho de todas as requisicoes axios, isso ocorrera todas as vezes que o usuario resetar a pagina
};

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try{
    if (id) {//Vai verificar se dentro do payload, onde tem todo o estado do usuario, existe um ID, se ele existir quer dizer que o usuario esta logado, caso ele esteja logado, o axios vai fazer a requisicao para atualizar os dados do usuario, se nao, o axios vai fazer a requisicao para criar um novo usuario na aplicacao
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,//caso o usuario nao tenha mandado a senha para atualizar os dados, nos vamos mandar como undefined, e a API ira lidar com isso
      });
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));//Apos tudo dar certo mandamos o reducer de sucesso, que jogara os dados atualizados enviados pelo payload, ele ira pegar estes dados, jogar dentro do estado global, e tirar o componente de Loading colocado pelo request la no reducer
    } else {//Se caso nao tiver um Id existente, ele ira reconhecer que o usuario nao esta tentando atualizar as informacoes, mas sim criando um novo user, assim ira carregar a pagina post correta para criacao de usuario
      yield call(axios.post, '/users', {
        email,
        nome,
        password: password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));//Apos isso, vai chamar o reducer para setar todas as informacoes do usuario dentro do estado global da aplicacao
      history.push('/login');//Vai redirecionar o usuario para fazer login
    }
  }catch(e) {
    const errors = get(e, 'reponse.data.errors', []);
    const status = get(e, 'status', 0);

    if(status === 401){//Este erro e um erro enviado pela propria API, onde ele exige que o usuario faca login novamente, apos alterar o email, o token dado pelo login e diferente, e vai ser dado erro 401 por causa do token
      toast.error('Você precisa fazer login novamente');
      yield put(actions.loginFailure());//Vai usar este reducer para apagar as informacoes do usuario do estado global
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map(error => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());//Caso tenha dado alguma falha no caminho, vamos chamar o reducer de falha
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),//Ao chamar o disapatch, o saga vai ser executado inicialmente aqui, aonde ele vai vincular a acao que foi chamada, com a propria funcao do saga, aonde ele vai realizar a request da API
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),//types.PERSIST_REHYDRATE: é o tipo da ação disparada automaticamente pelo redux-persist quando o estado persistido da aplicação for reidratado (ou seja, carregado do armazenamento), Isso e necessario por que se o token for jogado no axios assim que a requisicao for feita, no caso no loginRequest, quando o usuario atualizar a pagina, a requisicao nao vai ser feita novamente, assim o token nao vai estar no redux persist, pedindo ao usuario para realizar login novamente, pois axios.defaults e resetado apos o reload.

  //Sempre que o redux-persist recupera os dados do localStorage, ele dispara a action PERSIST_REHYDRATE, que pode ser interceptada por uma saga (como persistRehydrate) para configurar coisas como o token no Axios.

  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
