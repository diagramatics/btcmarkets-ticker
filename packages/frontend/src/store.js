import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

persistStore(store);
