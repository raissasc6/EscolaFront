import React, { Component } from "react";
import MentorService from "../../services/MentorService";
import TabelaComponent from "../pages/TabelaComponent";
import FuncionalidadesComponent from "../pages/FuncionalidadesComponent";

class MentorComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mentores: [],
    };
    
  }

  componentDidMount() {
      MentorService.get().then(
        (res) => {
          this.setState({ mentores: res.data });
          console.log(this.state.mentores);
        },
        [this.state.mentores]
      ).catch(error => {
        console.error(error)
      })
  }

  addMentor() {
    this.props.history.push("/mentor/novo");
  }

  deleta(id) {
    MentorService.del(id).then(() => {
      this.setState({
        mentores:  this.state.mentores.filter(
          mentor => mentor.id !== id
        )
      })
    }).catch(error => {
      window.alert("Erro ao deletar o mentor");
      console.error(error)
    })
  }

  update(id) {
    this.props.history.push(`/mentor/${id}`);
  }

  render() {
    if (this.state.mentores.length === 0) {
      return (
         <FuncionalidadesComponent titulo="Lista de Mentor" btnCadastro={this.addMentor.bind(this)} nome="Mentor"></FuncionalidadesComponent>
      );
    } else {
      return (
        <>
        <FuncionalidadesComponent titulo="Lista de Mentor" btnCadastro={this.addMentor.bind(this)} nome="Mentor"></FuncionalidadesComponent>
          <TabelaComponent
            itensHead={["ID", "Nome", "Opções"]}
            itensBody={this.state.mentores}
            update={this.update.bind(this)}
            deleta={this.deleta.bind(this)}
          ></TabelaComponent>
        </>
      );
    }
  }
}

export default MentorComponent;
