(function() {
  'use strict';

  angular.module('rpiHome').directive('trafficMap', trafficMap);

  function trafficMap() {
    return {
      restrict: 'E',
      controller: trafficController,
      bindToController: true,
      controllerAs: 'vm',
      templateUrl: 'app/components/trafficMap/trafficMap.html'
    };

    /** @ngInject */
    function trafficController($http,CITY,$timeout,$interval) {
      var vm = this;
      vm.map = {center: {latitude: 0, longitude: 0 }, zoom: 11 };
      $http.get('//maps.googleapis.com/maps/api/geocode/json?address='+CITY + ', PA').success(function(data){
        var location = data.results[0].geometry.location;
        vm.map.center.latitude = location.lat;
        vm.map.center.longitude = location.lng;
        vm.show = true;
        vm.showMapLayer = true;
        $interval(refreshMap, 1000 * 60 * 60);
      });
      vm.show = false;
      vm.showMapLayer = false;

      function refreshMap() {
        vm.showMapLayer = false;
        $timeout(function() {
          vm.showMapLayer = true;
        }, 500, 1);
      }

    }
  }
})();