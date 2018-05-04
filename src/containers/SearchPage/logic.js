import { createLogic } from 'redux-logic';
import { LOCATION_CHANGE } from 'react-router-redux';
import { API_URL } from '../../constants';
import { LOAD_SEARCH } from './constants';

const loadSearchLogic = createLogic({
  type: LOAD_SEARCH,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ requestUtil }, dispatch, done) {
    const requestURL = `${API_URL}/investment-funds/summary`;
    requestUtil(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((success) => {
      console.log(success);
    }).catch((error) => {
      console.log(error);
    }).then(done);
  },
});

export default loadSearchLogic;
