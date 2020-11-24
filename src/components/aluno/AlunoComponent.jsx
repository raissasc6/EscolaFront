import React, { Component } from "react";
import AlunoService from "../../services/AlunoService";
import TabelaComponent from "../pages/TabelaComponent";
import FuncionalidadesComponent from "../pages/FuncionalidadesComponent";

class AlunoComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };
    
  }

  componentDidMount() {
      AlunoService.get().then(
        (res) => {
          this.setState({ alunos: res.data });
          console.log(this.state.alunos);
        },
        [this.state.alunos]
      ).catch(error => {
        console.error(error)
      })
  }

  addAluno() {
    this.props.history.push("/aluno/novo");
  }

  deleta(id) {
    AlunoService.delete(id).then(() => {
      this.setState({
        alunos:  this.state.alunos.filter(
          aluno => aluno.id !== id
        )
      })
    }).catch(error => {
      window.alert("Erro ao deletar o aluno");
      console.error(error)
    })
  }

  update(id) {
    this.props.history.push(`/aluno/${id}`);
  }

  render() {
    if (this.state.alunos.length === 0) {
      return (
         <FuncionalidadesComponent titulo="Lista de Aluno" btnCadastro={this.addAluno.bind(this)} nome="Aluno"></FuncionalidadesComponent>
      );
    } else {
      return (
        <>
        <FuncionalidadesComponent titulo="Lista de Aluno" btnCadastro={this.addAluno.bind(this)} nome="Aluno"></FuncionalidadesComponent>
          <TabelaComponent
            itensHead={["ID", "Nome", "Opções"]}
            itensBody={this.state.alunos}
            update={this.update.bind(this)}
            deleta={this.deleta.bind(this)}
          ></TabelaComponent>
        </>
      );
    }
  }
}

export default AlunoComponent;
