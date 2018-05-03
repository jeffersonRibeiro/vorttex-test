/* global process */
const API_ENDPOINT_PRD = process.env.API_ENDPOINT_PRD ||
'';

const API_ENDPOINT_DSV = process.env.API_ENDPOINT_DSV ||
'';

export const ENV = process.env.NODE_ENV || 'development';
export const API_URL = ENV === 'production' ? API_ENDPOINT_PRD : API_ENDPOINT_DSV;
