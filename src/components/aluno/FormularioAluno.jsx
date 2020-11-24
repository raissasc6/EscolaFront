import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AlunoService from "../../services/AlunoService";

function FormularioAluno(props) {
  const [id, setID] = useState();
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  let history = useHistory();

  if (props.match.params.id && id == null) {
    console.log("estrou no if");
    AlunoService.getById(props.match.params.id).then(
      (res) => {
        let aluno = res.data;
        console.log(aluno);
        setID(aluno.id);
        setNome(aluno.nome);
        setClasse(aluno.classe);
      },
      [props.match.params.id]
    );
  }

  return (
    <>
      <Typography variant="h1" component="h4" align="center">
        Formulário de cadastro
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ id: id, nome: nome, classe: classe }, history);
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          id="nome"
          label="nome"
          name="nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={classe}
          onChange={(event) => {
            setClasse(event.target.value);
          }}
          id="classe"
          label="classe"
          name="classe"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </form>
    </>
  );
}

function onSubmit(dados, history) {
  if (dados.id == null) {
    AlunoService.create(dados)
      .then(() => {
        voltar(history);
      })
      .catch((error) => {
        window.alert("Erro ao cadastrar o aluno");
        console.error(error);
      });
  } else {
    AlunoService.update(dados)
      .then((res) => {
        voltar(history);
      })
      .catch((error) => {
        window.alert("Erro ao atualizar o aluno");
        console.error(error);
      });
  }
}
function voltar (history) {
  history.push("/alunos");
}


export default FormularioAluno;
