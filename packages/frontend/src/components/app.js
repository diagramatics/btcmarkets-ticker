import { h } from 'preact';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../store';
import Header from './header';
import Home from '../routes/home/index';

const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-rows: [header] 48px [content] auto;
`;

const history = syncHistoryWithStore(createBrowserHistory(), store);

export default () => (
  <Provider store={store}>
    <Wrapper>
      <Header />
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    </Wrapper>
  </Provider>
);
