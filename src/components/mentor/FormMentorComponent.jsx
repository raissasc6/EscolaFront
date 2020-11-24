import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MentorService from "../../services/MentorService";

function FormMentorComponent(props) {
  const [id, setID] = useState();
  const [nome, setNome] = useState("");
  const [pais, setPais] = useState("");
  let history = useHistory();

  if (props.match.params.id && id == null) {
    console.log("estrou no if");
    MentorService.getById(props.match.params.id).then(
      (res) => {
        let mentor = res.data;
        console.log(mentor);
        setID(mentor.id);
        setNome(mentor.nome);
        setPais(mentor.pais);
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
          onSubmit({ id: id, nome: nome, pais: pais }, history);
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
          value={pais}
          onChange={(event) => {
            setPais(event.target.value);
          }}
          id="pais"
          label="pais"
          name="pais"
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
    MentorService.create(dados)
      .then(() => {
        voltar(history);
      })
      .catch((error) => {
        window.alert("Erro ao cadastrar o mentor");
        console.error(error);
      });
  } else {
    MentorService.update(dados)
      .then((res) => {
        voltar(history);
      })
      .catch((error) => {
        window.alert("Erro ao atualizar o mentor");
        console.error(error);
      });
  }
}
function voltar (history) {
  history.push("/mentores");
}


export default FormMentorComponent;
