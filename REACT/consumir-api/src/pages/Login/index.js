import React from "react";
import { toast } from 'react-toastify';
import { isEmail } from "validator";
import { useDispatch, useSelector } from "react-redux";
import { get } from 'lodash';

import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';


export default function Login(props){//Este props veio do redirect, aonde tem o state
  const dispatch = useDispatch();//Dispatch para disparar acoes para o reducer e o saga

  const prevPath = get(props, 'location.state.prevPath', '/');//Vai pegar a rota anterior do usuario, dentro das propriedades enviadas (state) no redirect, com o prevPath

  const isLoading = useSelector(state => state.auth.isLoading);

  const [email, setEmail] = React.useState('');//Seta o email no estado, e a funcao setEmail para mudar o valor do estado, valor padrao sendo uma string vazia
  const [password, setPassword] = React.useState('');//Seta a senha no estado, com a funcao setPassword para setar o valor do estado, valor padrao como uma string vazia

  const handleSubmit = e => {
    e.preventDefault();//Previne todos as acoes por padrao ao chamar o evento

    let formErrors = false;

    if(!isEmail(email)) {
      formErrors = true;
      toast.error(`E-mail inválido.`);
    }

    if(password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error(`Senha Inválida`);
    }

    if(formErrors) return;

    dispatch(actions.loginRequest({email, password, prevPath}));//Dispara puxando pelas actions a login Request, la nas actions ela vai retornar um type, e um payload, que neste caso e o email e o password, a partir desse dispatch o reducer e o saga, que a partir do type vai reconhecer a acao, o papel ddo reduicer e trocar e setar o estado global da aplicacao, ja do saga vai ser fazer a requisicao da API. Para continuar a explicacao va ate as actions que estao sendo importadas. O prevPath, vai pegar qual foi a pagina que o usuario estava tentando acessar antes de ser redirecionado para a pagina de login.
    //dispatch({ type: 'LOGIN_REQUEST' })
    // ↓
    //saga (intercepta com takeLatest/takeEvery) _Caso ela exista, se nao existir, ela pula direto para o reducer
    // ↓
    //faz a lógica (ex: API, validações, delay)
    // ↓
    //put({ type: 'LOGIN_SUCCESS' })
    // ↓
    //reducer (executa e atualiza o state)

  };

  return (
  <Container>
    <Loading isLoading={isLoading} />

    <h1>Login</h1>

    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Seu e-mail"
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Sua senha"
        autoComplete="off"
      />

      <button type="submit">Acessar</button>
    </Form>
  </Container>
  );
}
