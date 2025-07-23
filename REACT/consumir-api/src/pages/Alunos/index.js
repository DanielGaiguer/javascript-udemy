import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture, NovoAluno  }  from "./styled";
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos(){
  const [alunos, setAlunos] = useState([]);//Significa que o estado de alunos, vai ser setado o valor pela funcao setAlunos, e o valor padrao desta variavel e um array vazio
  const [isLoading, setIsLoading] = useState(false);//Vai manipular o estado para saber se esta carregando ou nao, para apresentar visualmente

  useEffect(() => {//Vai ser chamado assim que a pagina for carregada, e um react hook
    async function getData() {//Funcao para pegar dados da API com o axios
      setIsLoading(true);//Antes de iniciar a requisicao, vai setar como true, esta carregando
      const response = await axios.get('/alunos');//O IP da API ja esta setado, e dai ele vai pegar os dados dessa api com /alunos
      setAlunos(response.data);//Esta funcao vai setar automaticamente os dados do API dentro de alunos com a funcao a setAlunos
      setIsLoading(false);//Apos finalizar a requisicao, vai setar como false
    }

    getData();//Chama automaticamente a funcao para pegar dados, assim que todoso o componente da pagina for carregado
  }, []);

  const handleDeleteAsk = e => {//Funcao que vai trocar o botao, mostrando um e apagando o antigo
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;//Este nextSibling e o elemento irmao, que esta a direita, o proximo elemento do elemento que esta na variavel "e"
    exclamation.setAttribute('display', 'block');//Vai trocar o atributo de none para block
    e.currentTarget.remove();//Vai remover o elemento antigo
  };

  const handleDelete = async (e, id, index) => {//Funcao para deletar alunos da API
    e.persist();//Caso voce queira usar o evento dentro da funcao, e necessario usar essa linha para o react, neste caso nao usamos, mas se nos quissessemos usar o evento dentro de um onCLick ou onSubmit, pois ser um evento sintetico deveriamos usar esta linha

    try{
      setIsLoading(true);//Vai setar a tela de carregamento para o usuario
      await axios.delete(`/alunos/${id}`);//Vai fazer a chamada na API, para deletar o aluno com aquele ID

      const novosAlunos = [...alunos];//vai copiar os alunos listados na tela
      novosAlunos.splice(index, 1);//Vai retirar do array de alunos, 1 aluno com o index enviado na funcao, que sera o index do elemento dentro do array que o aluno esta listado
      setAlunos(novosAlunos);//Vai setar os alunos com o array novo apos o aluno ser deletado
      setIsLoading(false);//Vai retirar a tela de carregando
      toast.success('Aluno excluído com sucesso.');//Vai mandar uma confirmacao de sucesso
    }catch (err) {
      const status = get(err, 'status', []);

      if (status === 401 ) {//Erro 401 e um erro mandado pela API< para informarmos que a acao nao pode ser realizada pois o usuario nao esta logado
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

    <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>{/*Vai criar uma div por aluno, com a key do valor do ID do aluno, Toda vez que você renderiza uma lista no React, é obrigatório passar uma prop key única para cada item. */}
            <ProfilePicture>
              {/*get do lodash, vai pegar dentro do aluno, Fotos[0].url, se caso nao ter o valor vai ser false, depois ele vai verificar, se o valor for true ele ira carregar a imagem, se nao ele vai colocar um icone padrao*/}
              { get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}> {/*Link para editar com o ID do aluno  */}
              <FaEdit size={16}/>
            </Link>

            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>{/*Link para deletar com o ID do aluno */}
              <FaWindowClose size={16}/>
            </Link>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={e => handleDelete(e, aluno.id, index)}
            />{/*Envia o evento, o id do aluno que sera usado para apagalo na API< e o index que sera usado para apagalo na lista de alunos mostrada na tela */}

          </div>
        ))}
      </AlunoContainer>

    </Container>
  );
}
