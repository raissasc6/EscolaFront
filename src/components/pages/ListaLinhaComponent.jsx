import React, { Component } from "react";
import { TextField, Button, Typography, ButtonGroup } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
function ListaLinhaComponent(props) {
    const elemento = props.elemento;
  return (
      
    <StyledTableRow key={elemento.id}>
      <StyledTableCell component="th" scope="row">
        {elemento.id}
      </StyledTableCell>
      <StyledTableCell>{elemento.nome}</StyledTableCell>
      <StyledTableCell>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => props.update(elemento.id)}>Editar</Button>
          <Button onClick={() => props.deleta(elemento.id)}>Excluir</Button>
        </ButtonGroup>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default ListaLinhaComponent;
