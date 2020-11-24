import React, { Component } from "react";
import ProgramaService from "../../services/ProgramaService";
import TabelaComponent from "../pages/TabelaComponent";
import FuncionalidadesComponent from "../pages/FuncionalidadesComponent";

class ProgramaComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      programas: [],
    };
    
  }

  componentDidMount() {
      ProgramaService.get().then(
        (res) => {
          this.setState({ programas: res.data });
          console.log(this.state.programas);
        },
        [this.state.programas]
      ).catch(error => {
        console.error(error)
      })
  }

  addPrograma() {
    this.props.history.push("/programa/novo");
  }

  deleta(id) {
    ProgramaService.del(id).then(() => {
      this.setState({
        programas:  this.state.programas.filter(
          programa => programa.id !== id
        )
      })
    }).catch(error => {
      window.alert("Erro ao deletar o programa");
      console.error(error)
    })
  }

  update(id) {
    this.props.history.push(`/programa/${id}`);
  }

  render() {
    if (this.state.programas.length === 0) {
      return (
         <FuncionalidadesComponent titulo="Lista de Programa" btnCadastro={this.addPrograma.bind(this)} nome="Programa"></FuncionalidadesComponent>
      );
    } else {
      return (
        <>
        <FuncionalidadesComponent titulo="Lista de Programa" btnCadastro={this.addPrograma.bind(this)} nome="Programa"></FuncionalidadesComponent>
          <TabelaComponent
            itensHead={["ID", "Nome", "Opções"]}
            itensBody={this.state.programas}
            update={this.update.bind(this)}
            deleta={this.deleta.bind(this)}
          ></TabelaComponent>
        </>
      );
    }
  }
}

export default ProgramaComponent;
