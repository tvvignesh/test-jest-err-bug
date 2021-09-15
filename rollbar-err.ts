import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  enabled: true,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'development'
  }
});

class ApiErrorHandler {
  public static generateError(error: Error, params: any = {}): Error {
    if ('extensions' in error) {
      return error;
    }

    let errorProperties: object = {
      serviceName: 'OutreachApi'
    };

    errorProperties = {
      ...errorProperties,
      message: error.message
    };

    if (rollbar) {
      rollbar.error(error.message, [{ ...errorProperties, ...params }]);
    }

    return new Error('Unknown error resolving request to OutreachApi');
  }
}

export default ApiErrorHandler;
