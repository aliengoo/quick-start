(function () {
  'use strict';

  angular.module('app.fuelux').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    $stateProvider.state('fuelux', {
      url: '/fuelux',
      templateUrl: 'fuelux/fuelux.html',
      controller: 'Fuelux as fuelux'
    });
  }
}());