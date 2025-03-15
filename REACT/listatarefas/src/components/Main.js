import React, { Component } from "react";


export default class Main extends Component{
  state = {
    novaTarefa: '',
  };


  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render(){
    return (
      <div className="main">
        <h1>Lista de Tarefas </h1>

        <form action="#">
          <input onChange={this.handleChange} type="text"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
};
