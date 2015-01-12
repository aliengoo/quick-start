(function () {
  'use strict';

  angular.module('app.customer').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('customer', {
      url : '/customer',
      controller : 'Customer as customer',
      templateUrl : 'features/customer/customer.html'
    });
  }

}());
