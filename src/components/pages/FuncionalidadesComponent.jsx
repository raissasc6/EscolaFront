import React from 'react';
import { Button, Typography } from "@material-ui/core";

function PaginaComponent(props){

    return(
       
            <>
              <Typography variant="h4" component="h2" align="center">
                {props.titulo}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                align="right"
                onClick={props.btnCadastro}
              >
                Cadastrar {props.nome}
              </Button>
            </>
    );


}

export default PaginaComponent;