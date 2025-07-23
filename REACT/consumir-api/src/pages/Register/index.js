import React, { useState } from "react";
import { toast } from 'react-toastify';
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled';
import Loading  from "../../components/Loading";
import * as actions from '../../store/modules/auth/actions';

export default function Register(){
  const dispatch = useDispatch();

  //Vai pegar todos os dados do state do reducer
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {// é disparado automaticamente sempre que qualquer uma das variáveis emailStored, id ou nomeStored mudar.
    if(!id) return;//Vai verificar se o usuario esta logado ou nao, pelo id dentro do state

    setNome(nomeStored);//Uma vez que o id está presente (indicando que o usuário está logado e os dados foram carregados), o nome e o e-mail armazenados no state global (nomeStored, emailStored) são copiados para o estado local do componente
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if(nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error(`Campo nome deve conter de 3 a 255 caracteres.`);
    }

    if(!isEmail(email)) {
      formErrors = true;
      toast.error(`E-mail inválido.`);
    }

    if(!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error(`Campo Senha deve conter de 6 a 50 caracteres.`);
    }

    if(formErrors) return;//Se tiver erros, vai parar a aplicacao aqui

    dispatch(actions.registerRequest({ nome, email, password, id }));//Se nao, vai chamar o reducer e o saga, primeiro vai fazer a requisicao, la no saga, ela vai verificar se o usuario esta criando uma nova conta, ou editando uma existente,
  }


  return (
  <Container>
    <Loading isLoading={isLoading} />

    <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

    <Form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu nome"
        />
      </label>

      <label htmlFor="email">
        E-mail:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
      </label>

      <label htmlFor="senha">
        Senha:
        <input
          type="password"
          value={password}
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
      </label>

      <button type="submit">{ id ? 'Salvar' : 'Criar conta'}</button>
    </Form>
  </Container>
  );
}
