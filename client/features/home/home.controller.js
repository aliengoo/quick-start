(function () {
  'use strict';

  angular.module('app.home').controller('Home', Home);

  Home.$inject = ['sweetAlertService'];

  function Home(sweetAlertService) {
    var home = this;

    home.config = {
      text : 'Hello, World2',
      title : 'This is a title'
    };

    home.show = function() {
      sweetAlertService.show(home.config);
    };

  }
}());