import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import btcAudReducer from './btc-aud';
import ethAudReducer from './eth-aud';
import ltcAudReducer from './ltc-aud';

export default combineReducers({
  routing: routerReducer,
  btcAud: btcAudReducer,
  ethAud: ethAudReducer,
  ltcAud: ltcAudReducer
});
