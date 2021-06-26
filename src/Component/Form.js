import React, { Component } from 'react';
import './Form.css'
import Input from './Input'
import Select from './Select'
import Radio from './Radio'
import TextArea from './TextArea'

class Form extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    nameToUpperCase = ({ target }) => {
        target.value = target.value.toUpperCase();
    }

    onMouseEnter = () => {
      if(this.state.count === 0) {
        alert('Preencha com cuidado esta informação')
        this.setState({
          count: 1
        })
      }
    }

  render() {
    return(
      <form>
        <fieldset className="fieldset">
          <legend>Dados Pessoais</legend>
            <Input type="text" name="Nome" maxLength="40" onChange={this.nameToUpperCase}/>
            <Input type="text" name="Email" maxLength="50" />
            <Input type="number" name="CPF" maxLength="11" />
            <Input type="text" name="Endereço" maxLength="200" />
            <Input type="" name="Cidade" maxLength="28" />
            <Select name="Estado"/>
            <Radio />
        </fieldset>
        <fieldset className="fieldset">
            <legend>Dados Curriculares</legend>
              <TextArea name="Resumo Curricular" maxLength="1000" />
              <TextArea name="Cargo" maxLength="40" onMouseEnter={this.onMouseEnter} />
              <TextArea name="Resumo do Cargo" maxLength="500" />
        </fieldset>
      </form>
    )
  }
}

export default Form;