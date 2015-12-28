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
    function trafficController($http,CITY) {
      var vm = this;
      $http.get('//maps.googleapis.com/maps/api/geocode/json?address='+CITY).success(function(data){
        var location = data.results[0].geometry.location;
        vm.map.center.latitude = location.lat;
        vm.map.center.longitude = location.lng;
        vm.show = true;
      });
      vm.map = {center: {latitude: 0, longitude: 0 }, zoom: 12 };
      vm.show = false;
    }
  }
})();