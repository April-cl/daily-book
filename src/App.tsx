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

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Edit() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <h2>
      页面不存在
    </h2>
  );
}

export default App;
