export default class ApiError extends Error {
  constructor(status = false, ...params) {
    super(...params);

    this.status = status;
    this.date = new Date();
  }
}
