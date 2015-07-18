(function() {
  'use strict';
  angular.module('rpiHome').directive('weather', weatherDirective);

  function weatherDirective() {
    return {
      restrict: 'E',
      scope:{
        city: '@'
      },
      controller: function($log, $http, WEATHER_API, $interval) {
        var vm = this;
        var url = WEATHER_API + vm.city;
        vm.temperature = 0;
        vm.rain = false; //should i bring an umbrella?
       vm.getWeather = function() {
         $http.get(url).then(function(response) {
           var data = response.data;
           for (var i = 0; i < 4; i += 1) { //the list is every 3 hours, so 3 x 4 = 12 hour time
             vm.temperature += data.list[i].main.temp;
             for (var j = 0; j < data.list[i].weather.length; j +=1) {
               if(data.list[i].weather[j].main === 'Rain') {
                 vm.rain = true;
               }
             }
           }
           vm.temperature = Math.round(vm.temperature / 4); //get average
         });
       };

       $interval(vm.getWeather(), (1000 * 60 * 60)); //recall every 1 hour
       vm.getWeather();

      },
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: '/app/components/weather/weather.html'
    };
  }
})();
