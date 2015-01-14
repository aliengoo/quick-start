(function () {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ngResource',
    'ngCookies',

    'app.infrastructure',
    'app.home',
    'app.customer',
    'app.fuelux']);

}());
