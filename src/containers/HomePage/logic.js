import { createLogic } from 'redux-logic';
import { LOCATION_CHANGE } from 'react-router-redux';
import { API_URL } from '../../constants';
import { LOAD_HOME } from './constants';

const loadHomeLogic = createLogic({
  type: LOAD_HOME,
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
      console.log('ola', success);
    }).catch((error) => {
      console.log(error);
    }).then(done);
  },
});

export default loadHomeLogic;
