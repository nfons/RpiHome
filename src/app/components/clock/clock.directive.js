
(function() {
  'use strict';

  angular.module('rpiHome').directive('clock', clockDirective);

  function clockDirective(){
    return {
      restrict: 'E',
      scope: {},
      controller: function($scope, $timeout) {
        var vm = this;
        vm.clock = Date.now();
        var tickTime = 1000; //1 secs per tick, if you want a more acurate clock, use your damn phone

        function tick() {
          vm.clock = Date.now();
          $timeout(tick, tickTime);
        }

        $timeout(tick, tickTime);
      },
      templateUrl: 'app/components/clock/clock.html',
      controllerAs: 'vm',
      bindToController: true
    };
  }
})();
