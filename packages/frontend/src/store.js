import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(reducers, devToolsEnhancer());

export default store;

persistStore(store);
