import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import FormProgramaComponent from './FormProgramaComponent';
import ProgramaComponent from './ProgramaComponent';


function RotasPrograma(){
    return(
        <>
        <Router>
            <Switch>
              <Route path="/programas" exact component={ProgramaComponent}></Route>
              <Route path="/programa/novo" component={FormProgramaComponent}></Route>
              <Route path="/programa/:id" component={FormProgramaComponent}></Route>
            </Switch>
          </Router>

        </>
    )
}



export default RotasPrograma;