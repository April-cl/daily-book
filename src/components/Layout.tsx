import Nav from './Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    margin: 0 auto;
    max-width: 500px;
    border: 1px solid #ccc;
  }
`
const Main = styled.div`
  flex: 1;
  overflow: auto;
`
const Layout =(props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )
}

export default Layout