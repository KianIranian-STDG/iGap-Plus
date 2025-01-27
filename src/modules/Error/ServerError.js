/**
 * @flow
 */
import ExtendableError from './ExtendableError';

export default class ServerError extends ExtendableError {

  /**
   * ServerError constructor
   * @param {ProtoErrorResponse} errorResponse
   * @param {number} actionId
   */
  constructor(errorResponse, actionId = 0) {
    let msg = `Api error #${errorResponse.getMajorCode()}_${errorResponse.getMinorCode()}`;
    if (errorResponse.getMessage()) {
      msg += ` [${errorResponse.getMessage()}]`;
    }
    if (actionId) {
      msg += ` [actionId = ${actionId}]`;
    }
    super(msg);

    this._errorResponse = errorResponse;
  }

  /**
   * ProtoErrorResponse
   * @return {ProtoErrorResponse}
   */
  get errorResponse() {
    return this._errorResponse;
  }
}
