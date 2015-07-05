'use strict';

(function() {
  angular.module('rpiHome').directive('weather', weatherDirective);

  function weatherDirective() {
    return {
      restrict: 'E',
      scope:{
        city: '@'
      },
      controller: function($log, $http, $scope) {
        $log.info($scope.city);
      },
      templateUrl: '/app/components/weather/weather.html'
    }
  }
})();
