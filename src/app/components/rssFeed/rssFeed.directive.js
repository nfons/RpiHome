(function() {
  angular.module('rpiHome').directive('rssFeed', rssDirective);

  function rssDirective() {
    return {
      restrict: 'E',
      scope: {
        url: '@'
      },
      bindToController: true,
      controller: function($scope, $log, $http) {
        $log.info
      },
      controllerAs: 'ctrl',
      templateUrl: 'rssFeed.html'
    };
  }
})();
