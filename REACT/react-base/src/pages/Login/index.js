import React from "react";

import { Title, Paragrafo} from './styled';
import { Container } from "../../styles/GlobalStyles";

export default function Login(){
  function handleClick(){
    e.preventDe
  }

  return (
  <Container>
    <Title>
      Login
      <small>oie</small>
    </Title>
    <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
    <button type="button" onClick={handleClick}>Salvar</button>
  </Container>
  );
}
