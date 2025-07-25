import React, { useState } from "react";
import { toast } from 'react-toastify';
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";
import { FaExclamation } from 'react-icons/fa';

import { Container } from "../../styles/GlobalStyles";
import { Form, BotaoDelete } from './styled';
import Loading  from "../../components/Loading";
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register(){
  const dispatch = useDispatch();

  //Vai pegar todos os dados do state do reducer
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoadingStored = useSelector(state => state.auth.isLoading);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const handleDeleteUser = async (e) => {//Funcao que ira deletar o usuario
    e.preventDefault();
    if (id) {
      try{
        setIsLoading(true);
        await axios.delete('/users');//Vai fazer a requisicao para deletar o usuario, a partir do token, entao nao e necessario id nem nenhum parametro
        setIsLoading(false);
        toast.success('Usuário deletado com sucesso.');
        dispatch(actions.loginFailure());//Vai deslogar o usuario
        history.push('/');
      } catch(e) {
        setIsLoading(false);
        toast.error('Erro ao tentar deletar usuário.');
        dispatch(actions.loginFailure());//Vai deslogar o usuario
        history.push('/');
      }
    };
  };

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;//Este nextSibling e o elemento irmao, que esta a direita, o proximo elemento do elemento que esta na variavel "e"
    exclamation.style.display = 'block';//Vai trocar o atributo de none para block
    e.currentTarget.remove();//Vai remover o elemento antigo
  };


  return (
  <Container>
    <Loading isLoading={isLoadingStored || isLoading} />

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

      { isLoggedIn && ( <BotaoDelete type="submit" onClick={e => handleDeleteAsk(e)}> Deletar </BotaoDelete>)}

      { isLoggedIn && (
        <BotaoDelete display="none" onClick={e => handleDeleteUser(e)}>
          <FaExclamation size={16} color="#fff" > </FaExclamation>
        </BotaoDelete>)}

    </Form>
  </Container>
  );
}
