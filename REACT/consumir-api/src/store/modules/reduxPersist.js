import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer({//E aonde ele vai salvar o estado da aplicacao no storage do navegador
    key: 'CONSUMO-API',//Aqui vai ser a key que ira aparecer no navegador, no devTools
    storage,//Aqui o local aonde ele ira ser salvo
    whitelist: ['auth'],//Somente o estado do reducer auth será salvo e restaurado, ele sabe a chave auth devidon o nome que esta dentro do combine reducers, dentro do arquivo rootReducer
    },
    reducers);

    return persistedReducers;
};
