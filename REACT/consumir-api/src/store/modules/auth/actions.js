import * as types from '../types';

export function loginRequest(payload) {//Vai reconhecer esta funcao, e vai retornar para o dispatch o type, que esta sendo importado, apenas para setar como string, e os dados que estao sendo enviados, no caso o payload, a partir disso o saga e o reducer vao ser chamados, va para eles para continuar a explicacao
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}
