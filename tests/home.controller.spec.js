(function () {
  'use strict';

  describe('Home controller', function() {

    beforeEach(module('app'));

    var $scope,
      controller;

    beforeEach(inject(function(_$rootScope_, _$controller_) {
      $scope = _$rootScope_.$new();
      controller = _$controller_('Home', {
        $scope : $scope
      });
    }));

    it('message is set correctly', function() {
      expect(controller.message).toBe('Hello, World!');
    });
  });

}());