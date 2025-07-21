import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);//Vai selecionar atraves de useSelector o state global configurado pelo reducer

  if (isClosed && !isLoggedIn){
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath:rest.location.pathname } }}//State e um objeto opcional com dados que voce leva junto na navegacao, que neste caso vai parar em location.state la na pagina de login, dentro de props
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;//O rest vai ser as props, as propriedades necessarias para aquela rota, e o componente vai ser o componente no qual esta sendo direcionado
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
