import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import FormMentorComponent from './FormMentorComponent';
import MentorComponent from './MentorComponent';


function RotasMentor(){
    return(
        <>
        <Router>
            <Switch>
              <Route path="/mentores" exact component={MentorComponent}></Route>
              <Route path="/mentor/novo" component={FormMentorComponent}></Route>
              <Route path="/mentor/:id" component={FormMentorComponent}></Route>
            </Switch>
          </Router>

        </>
    )
}



export default RotasMentor;