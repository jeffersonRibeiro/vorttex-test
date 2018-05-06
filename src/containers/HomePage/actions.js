import { FETCH_BANNERS } from './constants';

import request from '../../utils/request';

const bannersAPI = 'http://localhost:8001/api/banners/';

const fetchBanners = () => (dispatch) => {
  request(bannersAPI).then((response) => {
    const { banners } = response;

    return dispatch({
      type: FETCH_BANNERS,
      payload: banners,
    });
  }).catch((err) => {
    console.log(err);
    throw new Error('Não foi possível obter os banners. Tente novamente mais tarde.');
  });
};

export default fetchBanners;
