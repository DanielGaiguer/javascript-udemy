import * as types from '../types';

const initialState = {//Estado inicial e padrao da aplicacao, aqui vai ser setado tudo que posteriormente vai ser salvo no estado
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {//Apos ser chamado no dispatch, o reducer inteiro vai ser chamado, e ira iniciar uma filtragem da acao que foi chamada, com o switch case, para saber qual vai ser o proximo passo
  switch(action.type) {
    case types.LOGIN_SUCCESS: {//Caso a action que foi mandada na chamada do reducer la no saga for essa, o codigo abaixo vai ser executado
      console.log('reducer', action.payload);//o payload e todos os dados sao enviados junto a action
      return state;//O reducer sempre deve retornar o estado
    }

    case types.BOTAO_CLICADO_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
};
