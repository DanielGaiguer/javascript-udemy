import React, { useState, useEffect } from "react";
import { get } from "lodash";
import { isEmail, isInt, isFloat } from "validator";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from "../../styles/GlobalStyles";
import { Form, ProfilePicture, Title } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }){
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');//match e params.id estao dentro das props, que sao enviadas na chamada da pagina nas rotas
  const [nome, setNome] = useState('');//Vai definir tudo no estado da aplicacao
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;

    async function getData() {

      try{
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);//Vai tentar fazer a requisicao de edicao do usuario, enviando o id do mesmo
        const Foto = get(data, 'Fotos[0].url', '');//Caso ele tenha foto, ele ira setar no state
        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch(err) {
        setIsLoading(false);
        const status = get(err, 'status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map(error => toast.error(error));//Este erro e uma ma requisicao na API, onde o aluno que esta tentando ser buscado nao existe, redirecionando o usuario a home
        history.push('/');
      }
    }

    getData();
  }, [id]);//Id neste caso e um paramentro para o UseEffect, caso ele nao exista o useEffect nao sera chamado

  const handleSubmit = async e => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres.');
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres.');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Email Inválido.');
      formErrors = true;
    }

    if(!isInt(String(idade))) {
      toast.error('Idade Inválida.');
      formErrors = true;
    }

    if(!isFloat(String(peso))) {
      toast.error('Peso Inválido.');
      formErrors = true;
    }

    if(!isFloat(String(altura))) {
      toast.error('Altura Inválida.');
      formErrors = true;
    }

    if (formErrors) return;

    try {//Caso nao exista erros de validacao, vamos tentar criar/editar o aluno
      setIsLoading(true);
      if(id) {//Caso ja exista um id. nos estamos editando
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso.');
      } else {//Caso ainda nao exista um Id nos estamos criando
        const { data } = await axios.post(`/alunos/`, {//Pegamos o data para pegar o Id do aluno, para redirecionarmos o usuario para a pagina de edicao apos a criacao do aluno
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso.');
        history.push(`aluno/${data.id}/edit`);//Apos criar o aluno ira direcionar o usuario para a pagina de edicao do mesmo
      }

      setIsLoading(false);
    } catch(err) {
      const status = get(err, 'status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if(errors.length > 0) {
        errors.map(error => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if(status === 401 ) dispatch(actions.loginFailure());//Caso o erro seja 401, provavelmente o usuario esta com token expirado, entao redirecionamos ele para fazer o login novamente

      setIsLoading(false);
    }

  };

  return (
  <Container>
    <Loading isLoading={isLoading} />
    <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>

    {id && (
      <ProfilePicture>
        {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />} {/*Para exibir a foto do Aluno, caso nao exista sera um Icone */}
        <Link to={`/fotos/${id}`}>{/*Link para a rota de edicao de foto do aluno */}
          <FaEdit size={24} />
        </Link>
      </ProfilePicture>
    )}

    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome"
      />

      <input
        type="text"
        value={sobrenome}
        onChange={e => setSobrenome(e.target.value)}
        placeholder="Sobrenome"
      />

       <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />

       <input
        type="number"
        value={idade}
        onChange={e => setIdade(e.target.value)}
        placeholder="Idade"
      />

       <input
        type="text"
        value={peso}
        onChange={e => setPeso(e.target.value)}
        placeholder="Peso"
      />

       <input
        type="text"
        value={altura}
        onChange={e => setAltura(e.target.value)}
        placeholder="Altura"
      />

      <button type="submit">Enviar</button>
    </Form>
  </Container>
  );
}


Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,//Indica que a forma e um objeto, e e requerido
};
