(function () {
  'use strict';


  angular.module('app.fuelux').directive('fueluxCombobox', fueluxCombobox);

  function fueluxCombobox() {
    var ddo = {
      restrict : 'E',
      scope : {
        value : '='
      },
      link : link
    };

    return ddo;

    function link($s, $e, $a) {
      $($e).combobox();
    }
  }

}());
