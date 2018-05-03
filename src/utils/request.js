import 'whatwg-fetch';
import ApiError from './apiError';

const parseJSON = response => response.json();

const throwError = (json, status) => {
  throw new ApiError(status, json.message);
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then(json => throwError(json, response.status));
};

const request = (url, options) => fetch(url, options)
  .then(checkStatus)
  .then(parseJSON);

export default request;
