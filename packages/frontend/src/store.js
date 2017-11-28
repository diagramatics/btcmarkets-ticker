import { compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localforage';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  devToolsEnhancer(),
  compose(autoRehydrate())
);

export default store;

persistStore(store, { storage: localForage });
