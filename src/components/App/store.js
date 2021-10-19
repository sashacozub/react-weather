import { createStore, combineReducers } from 'redux';
import { displayReducer } from '../Display/displaySlice';

export const store = createStore(
  combineReducers({
    data: displayReducer,
  })
);
