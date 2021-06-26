import React, { Component } from 'react';
import './Form.css';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import TextArea from './TextArea';
import Button from './Button'

class Form extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            Nome: '',
            Email: '',
            CPF: '',
            Endereço: '',
            Cidade: '',
            Estado: 'AC',
            Residencia: 'Casa',
            ResumoCurricular: '',
            Cargo: '',
            ResumoDoCargo: ''
        }
    }

    nameToUpperCase = ({ target }) => {
      const valueUpperCase = target.value.toUpperCase();
      target.value = valueUpperCase
      this.setState({
        Nome: valueUpperCase
      })
    }

    onMouseEnter = () => {
      if(this.state.count === 0) {
        alert('Preencha com cuidado esta informação')
        this.setState({
          count: 1
        })
      }
    }

    submitButton = (e) => {
      e.preventDefault();
    }

    fillForm = ({ target }) => {
      const { value } = target;
      const name = target.name.split(' ').join('');
      this.setState({
        [name]: value
      })
    }

    clearForm = () => {
      window.location.reload();
    }

  render() {
    return(
      <form>
        <fieldset className="fieldset">
          <legend>Dados Pessoais</legend>
            <Input type="text" name="Nome" maxLength="40" onChange={this.nameToUpperCase} />
            <Input type="text" name="Email" maxLength="50" onChange={this.fillForm} />
            <Input type="text" name="CPF" maxLength="11" onChange={this.fillForm} />
            <Input type="text" name="Endereço" maxLength="200" onChange={this.fillForm} />
            <Input type="text" name="Cidade" maxLength="28" onChange={this.fillForm} />
            <Select name="Estado" onChange={this.fillForm} />
            <Radio name="Residencia" onChange={this.fillForm} />
        </fieldset>
        <fieldset className="fieldset">
            <legend>Dados Curriculares</legend>
              <TextArea name="Resumo Curricular" maxLength="1000" onChange={this.fillForm} />
              <TextArea name="Cargo" maxLength="40" onMouseEnter={this.onMouseEnter} onChange={this.fillForm} />
              <TextArea name="Resumo Do Cargo" maxLength="500" onChange={this.fillForm} />
        </fieldset>
        <Button name="Enviar" className="submit" type="submit" onClick={this.submitButton} />
        <Button name="Limpar" className="clear" onClick={this.clearForm} />
      </form>
    )
  }
}

export default Form;