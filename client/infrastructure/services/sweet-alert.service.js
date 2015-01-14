(function () {
  'use strict';

  angular.module('app.infrastructure').factory('sweetAlertService', sweetAlertService);

  sweetAlertService.$inject = ['$log'];

  function sweetAlertService($log) {

    var exports = {
      show: show
    };

    return exports;

    function show(config) {

      if (config) {

        if (!config.hasOwnProperty('title')){
          swal(config.text || 'You didn\'t provide a text property');
        } else {
          swal(config);
        }
      } else {
        $log.error('sweetAlertService configuration not was defined');
      }
    }
  }


}());
