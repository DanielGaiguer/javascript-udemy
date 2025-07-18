import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>{/*Vai usar o redux, onde tem varias funcionalidades*/}
      <PersistGate persistor={persistor}>{/*Vai usar o persistor, que ira guardar o estado da aplicacao */}
        <Router history={history}>{/*Vai usar o history, para gerenciar os caminhos e o historico dos caminhos do usuario */}
          <Header />{/*Componente padrao de cabecalho */}
          <Routes />{/*Todas as possiveos rotas da aplicacao*/}
          <GlobalStyle />{/*CSS global */}
          <ToastContainer autoClose={3000} className="toast-container"/>{/*Toast para mensagens com o usuario */}
        </Router>
      </PersistGate>
    </Provider>
);
}

export default App;
