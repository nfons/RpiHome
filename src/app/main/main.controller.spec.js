
(function() {
  'use strict';

  describe('controllers', function() {

    beforeEach(module('rpiHome'));
    // jscs maximumLineLength: false
    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');
    }));
  });
})();
