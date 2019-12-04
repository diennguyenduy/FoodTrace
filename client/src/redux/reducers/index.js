import { combineReducers } from 'redux';
import foodtraceReducer from './foodtraceReducer';

const rootReducer = combineReducers({
  foodtrace: foodtraceReducer
});

export default rootReducer;
