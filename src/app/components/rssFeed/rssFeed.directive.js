(function() {
  'use strict';

  angular.module('rpiHome').directive('rssFeed', rssDirective);

  function rssDirective() {
    return {
      restrict: 'E',
      scope: {
        url: '@'
      },
      controller: function($scope, $log, $http) {
        $log.info($scope.url);
      },
      controllerAs: 'ctrl',
      templateUrl: 'app/components/rssFeed/rssFeed.html'
    };
  }
})();
