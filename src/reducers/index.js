import { combineReducers } from 'redux';
import bannerReducer from '../containers/HomePage/reducer';


export default combineReducers({
  banners: bannerReducer,
});
