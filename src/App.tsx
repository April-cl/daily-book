import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
`


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签页</h2>;
}

function Edit() {
  return <h2>记账页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

function NoMatch() {
  return (
    <h2>
      页面不存在
    </h2>
  );
}

export default App;
