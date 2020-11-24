import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ProgramaService from "../../services/ProgramaService";

function FormProgramaComponent(props) {
  const [id, setID] = useState();
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  let history = useHistory();

  if (props.match.params.id && id == null) {
    console.log("estrou no if");
    ProgramaService.getById(props.match.params.id).then(
      (res) => {
        let programa = res.data;
        console.log(programa);
        setID(programa.id);
        setNome(programa.nome);
        setAno(programa.ano);
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
          onSubmit({ id: id, nome: nome, ano: ano }, history);
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
          value={ano}
          onChange={(event) => {
            setAno(event.target.value);
          }}
          id="ano"
          type="number"
          label="ano"
          name="ano"
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
    ProgramaService.create(dados)
      .then(() => {
        voltar(history);
      })
      .catch((error) => {
        window.alert("Erro ao cadastrar o programa");
        console.error(error);
      });
  } else {
    ProgramaService.update(dados)
      .then((res) => {
        voltar(history);
      })
      .catch((error) => {
        window.alert("Erro ao atualizar o programa");
        console.error(error);
      });
  }
}
function voltar (history) {
  history.push("/programas");
}


export default FormProgramaComponent;
