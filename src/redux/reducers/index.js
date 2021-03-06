import { combineReducers } from 'redux';
import newReporter from './reducer_newCountry.js';
import newHs2 from './reducer_newHS2.js';
import newPartner from './reducer_newPartner.js';
import newHs6 from './reducer_newHS6.js';

const rootReducer = combineReducers({
  reporter: newReporter,
  hs2: newHs2,
  partner: newPartner,
  hs6: newHs6
});

export default rootReducer;
