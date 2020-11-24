import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ListaLinhaComponent from "./ListaLinhaComponent";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TabelaComponent(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.itensHead.map((elemento, id) =>  (
              console.log(elemento),
                 <StyledTableCell key={id}> { elemento} </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.itensBody.map((elemento) => (
            console.log(elemento),
                 <ListaLinhaComponent key={elemento.id} elemento={elemento} update={props.update} deleta={props.deleta}></ListaLinhaComponent>
              ))}
              
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabelaComponent;
