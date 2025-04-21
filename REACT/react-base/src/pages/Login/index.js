import React from "react";

import { Title, Paragrafo} from './styled';
import { Container } from "../../styles/GlobalStyles";

import axios from '../../services/axios';

export default function Login(){
  React.useEffect(() => {
    async function getData(){
        const response = await axios.get('/alunos');
        console.log(response.data);
    }

    getData();
  }, []);

  return (
  <Container>
    <Title>
      Login
      <small>oie</small>
    </Title>
    <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
    <button type="button">Salvar</button>
  </Container>
  );
}
