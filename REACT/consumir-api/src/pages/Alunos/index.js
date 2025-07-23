import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture  }  from "./styled";
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

  const handleDelete = async (e, id, index) => {
    e.persist();

    try{
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);

      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
      toast.success('Aluno excluído com sucesso.');
    }catch (err) {
      const status = get(err, 'status', []);

      if (status === 401 ) {
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

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>{/*Vai criar uma div por aluno, com a key do valor do ID do aluno*/}
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
            />

          </div>
        ))}
      </AlunoContainer>

    </Container>
  );
}
