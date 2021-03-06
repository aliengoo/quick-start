(function () {
  "use strict";

  angular.module('app.infrastructure').config(exceptionConfig);

  exceptionConfig.$inject = ['$provide'];

  function exceptionConfig($provide) {
    $provide.decorator('$exceptionHandler', exceptionHandler);
  }

  exceptionHandler.$inject = ['$delegate'];

  function exceptionHandler($delegate) {
    return function (exception, cause) {
      $delegate(exception, cause);

      var errorData = {
        exception: exception,
        cause: cause
      };

      /**
       * Could add the error to a service's collection,
       * add errors to $rootScope, log errors to remote web server,
       * or log locally. Or throw hard. It is entirely up to you.
       * throw exception;
       */

      console.log(errorData);

      var message = '';

      if (angular.isString(exception)) {
        message = exception;
      } else if (exception.hasOwnProperty('message')) {
        message = exception.message;
      }

      console.log('Message-> ' + message);
    };
  }

}());
