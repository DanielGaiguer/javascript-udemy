//Aqui e aonde todo os reducers, sagas, e redus persist vai ser ligados

import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();//Saga middleware para rodar o saga

const store = createStore(
  persistedReducers(rootReducer),//Ira jogar os reducers dentro do persisted, e ele ira filtrar os que quer salvar
  applyMiddleware(sagaMiddleware)///Vai aplicar o Saga como um middleware
);

sagaMiddleware.run(rootSaga);//Agora vai aplicar todos os sagas

export const persistor = persistStore(store);//Exporta o persistor para ser salvo dentro do arquivo padrao da aplicacao
export default store;//Exporta tudo da pasta com reducers, sagas etc.


//Apos isso todos estes arquivos vao ser importados e usado dentro do App.js aonde vai juntar todos os arquivos, e por ele que todos os caminhos vao passar, como se ele fosse uma coisa central, um deio de viagem, e toda a aplicacao se localizasse a partir dele, popr exemplo o reducer vai saber aonde ele esta sendo chamado a paritr da tag criada dentro deste APP.js, entao a requisicao do reducer vai pra la, chama ele, e a partir do App.js ele sabera o que fazer, entao estes arquivos dentro de APP.js vai juntar tudo que e necessario, para fazer todos os reducers, sagas, persisted, tudo isso vai funcionar a partir da importacao do app.js
