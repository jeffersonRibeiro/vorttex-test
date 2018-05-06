import { FETCH_BANNERS } from './constants';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BANNERS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
