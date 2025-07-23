import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {//Estado inicial e padrao da aplicacao, aqui vai ser setado tudo que posteriormente vai ser salvo no estado
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {//Apos ser chamado no dispatch, o reducer inteiro vai ser chamado, e ira iniciar uma filtragem da acao que foi chamada, com o switch case, para saber qual vai ser o proximo passo
  switch(action.type) {
    case types.LOGIN_SUCCESS: {//Caso a action que foi mandada na chamada do reducer la no saga for essa, o codigo abaixo vai ser executado
      const newState = { ...state };//A manipulacao do estado nunca deve ser direta
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;//o payload e todos os dados sao enviados junto a action
      newState.isLoading = false;//Assim que o loggin for bem recebido, ele vai retirar o componente de isLoading
      return newState;//O reducer sempre deve retornar o estado
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;//Apenas quando a requisicao estiver sendo feita, o componente de isLoading vai ser true
      return newState;
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
};
