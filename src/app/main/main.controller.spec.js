// jscs:disable maximumLineLength
(function() {
  'use strict';

  describe('controllers', function() {

    beforeEach(module('rpiHome'));
    it('should define more than 5 awesome things', inject(function($controller) {
      $controller('MainController');
    }));
  });
})();
