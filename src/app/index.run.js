(function() {
  'use strict';

  angular
    .module('rpiHome')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
