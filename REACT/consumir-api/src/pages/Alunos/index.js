import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container} from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture  }  from "./styled";
import axios from '../../services/axios';

export default function Alunos(){
  const [alunos, setAlunos] = useState([]);//Significa que o estado de alunos, vai ser setado o valor pela funcao setAlunos, e o valor padrao desta variavel e um array vazio

  useEffect(() => {//Vai ser chamado assim que a pagina for carregada, e um react hook
    async function getData() {//Funcao para pegar dados da API com o axios
      const response = await axios.get('/alunos');//O IP da API ja esta setado, e dai ele vai pegar os dados dessa api com /alunos
      setAlunos(response.data);//Esta funcao vai setar automaticamente os dados do API dentro de alunos com a funcao a setAlunos
    }

    getData();//Chama automaticamente a funcao para pegar dados, assim que todoso o componente da pagina for carregado
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map(aluno => (
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

            <Link to={`/aluno/${aluno.id}/delete`}>{/*Link para deletar com o ID do aluno */}
              <FaWindowClose size={16}/>
            </Link>

          </div>
        ))}
      </AlunoContainer>

    </Container>
  );
}
