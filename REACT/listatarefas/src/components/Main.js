import React, { Component } from "react";
import './Main.css';
import Tarefas from './Tarefas';

import Form from './Form';

export default class Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  componentDidMount(){//Ele é chamado automaticamente logo após o componente ser montado no DOM.
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));//Vai pegar  o item 'tarefas' do localStorage e convertê-lo de volta para um objeto JavaScript.

    if (!tarefas) return;

    this.setState({ tarefas });//Vai setar o estado recuperado do localstorage
  }

  componentDidUpdate(prevProps, prevState) {//é um método de ciclo de vida em componentes de classe do React que é chamado logo após uma atualização (quando props ou state mudam).
    //PrevProps e o valor das propriedades antes da atualizacao
    //PrevState e o valor do estado antes da atualizacao
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));//Vai setar as tarefas no localstorage, convertendo o array de tarefas em uma string JSON, o tarefas em parenteses e o nome do item que queremos setar no localstorage.
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1 ) return;//retirar

    const novasTarefas = [...tarefas];

    if (  index === -1 ) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa : '',
        index: -1
      });
    }else{
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      })
    }
  }


  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  handleEdit = (e, index) => {
    const{ tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index]
    })
  }

  render(){
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas </h1>

      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa}
      />

      <Tarefas
        tarefas={tarefas}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />

      </div>
    )
  }
};
