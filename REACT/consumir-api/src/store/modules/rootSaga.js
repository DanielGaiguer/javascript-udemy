import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga(){//Aqui ele ira ligar todos os saga da aplicacao
  return yield all([auth]);
}
