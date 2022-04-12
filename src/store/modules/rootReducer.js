import { combineReducers } from 'redux';
import { commonReducer } from './common';
import { useReducer } from './user';

const reducers = {
  common: commonReducer,
  user: useReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
