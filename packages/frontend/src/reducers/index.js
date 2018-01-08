import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import btcAudReducer from './btc-aud';
import ethAudReducer from './eth-aud';
import ltcAudReducer from './ltc-aud';

const config = { key: 'primary', storage };

export default persistCombineReducers(config, {
  btcAud: btcAudReducer,
  ethAud: ethAudReducer,
  ltcAud: ltcAudReducer
});
