import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading ) return <></>;//Caso seja false, nao vai ter efeito visual

  return (//Se passar para ca, as sim vai retornar um componente visual
    <Container>
      <div>

      </div>
      <span>Carregando...</span>
    </Container>
  );
}


Loading.defaultProps = {//Seta o valor padrao, exigido pelo proptypes
  isLoading: false,
};


Loading.propTypes = {//Seta o tipo de dado da variavel, essas duas funcoes sao necessarias para parametros dentro do componente funcional
  isLoading: PropTypes.bool,
};
