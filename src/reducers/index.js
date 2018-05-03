import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homePageReducer from '../containers/HomePage/reducer';

const reducers = combineReducers({
  routerReducer,
  homePageReducer,
});

export default reducers;
