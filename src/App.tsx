import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';
import Edit from './views/Edit';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from='/' to='/edit'></Redirect>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
