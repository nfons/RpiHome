(function() {
  'use strict';

  angular.module('rpiHome').directive('rssFeed', rssDirective);

  function rssDirective() {
    return {
      restrict: 'E',
      scope: {
        url: '@'
      },
      controller: rssCtrl,
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'app/components/rssFeed/rssFeed.html'
    };
  }

  function rssCtrl($scope, $timeout, $http) {
    var vm = this;
    var index = 0;
    var tick = 10000;
    function googlerss (url) {
      return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
    }

    vm.getRSS = function() {
          googlerss(vm.url).then(function(resp) {
          vm.feeds=resp.data.responseData.feed.entries;
          vm.currentItem = vm.feeds[index];

      });
      $timeout(this.getRSS, 1000 * 60 * 5); //every 5 mins recall
    };

    vm.getRSS();

    function changeFeedItem(){
      vm.currentItem = vm.feeds[index];
      index += 1;
      if (index >= vm.feeds.length) {
        index = 0;
      }
      $timeout(changeFeedItem, tick);
    }

    $timeout(changeFeedItem, tick);
  }
})();
