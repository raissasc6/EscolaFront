import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormularioAluno from './FormularioAluno';
import AlunoComponent from './AlunoComponent';


function RotasAluno(){
    return(
        <>
        <Router>
            <Switch>
              <Route path="/alunos" exact component={AlunoComponent}></Route>
              <Route path="/aluno/novo" component={FormularioAluno}></Route>
              <Route path="/aluno/:id" component={FormularioAluno}></Route>
            </Switch>
          </Router>

        </>
    )
}



export default RotasAluno;