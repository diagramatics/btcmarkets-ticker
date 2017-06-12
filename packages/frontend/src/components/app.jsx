import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../store';
import Header from './header';
import Home from '../routes/home/index';
// import Home from 'async!./home';

const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-rows: [header] 48px [content] auto;
`;

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </Wrapper>
      </Provider>
    );
  }
}
