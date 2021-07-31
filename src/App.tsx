import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Edit from './views/Edit';
import { Statistics } from './views/Statistics';
import { Tags } from './views/Tags';
import { NoMatch } from './views/NoMatch';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from='/' to='/edit'></Redirect>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <div id='modal-root' />
    </>
  );
}

export default App;
