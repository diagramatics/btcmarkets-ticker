import { h } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../store';
import Header from './header';
import Home from '../routes/home';

const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-rows: [header] 56px [content] auto;
`;

export default () => (
  <Provider store={store}>
    <Wrapper>
      <Header />
      <Router>
        <Home path="/" default />
      </Router>
    </Wrapper>
  </Provider>
);
