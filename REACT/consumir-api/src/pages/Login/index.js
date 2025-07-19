import React from "react";
import { toast } from 'react-toastify';
import { isEmail } from "validator";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(){
  const dispatch = useDispatch();//Dispatch para disparar acoes para o reducer e o saga

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

    dispatch(actions.loginRequest({email, password}));//Dispara puxando pelas actions a login Request, la nas actions ela vai retornar um type, e um payload, que neste caso e o email e o password, a partir desse dispatch o reducer e o saga, que a partir do type vai reconhecer a acao, o papel ddo reduicer e trocar e setar o estado global da aplicacao, ja do saga vai ser fazer a requisicao da API. Para continuar a explicacao va ate as actions que estao sendo importadas.
  };

  return (
  <Container>
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
