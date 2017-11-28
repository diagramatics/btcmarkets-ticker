import { routerReducer } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';
import localForage from 'localforage';
import btcAudReducer from './btc-aud';
import ethAudReducer from './eth-aud';
import ltcAudReducer from './ltc-aud';

const config = { key: 'primary', storage: localForage };

export default persistCombineReducers(config, {
  routing: routerReducer,
  btcAud: btcAudReducer,
  ethAud: ethAudReducer,
  ltcAud: ltcAudReducer
});
