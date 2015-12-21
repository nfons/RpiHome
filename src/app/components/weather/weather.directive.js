/*
using openweathermap, we will get 5 day, 3hr forecast
*/
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
        vm.Status = undefined; //Rain / Snow / Etc
       vm.getWeather = function() {
         $http.get(url).then(function(response) {
           var data = response.data;
           vm.CurrentTemp = Math.round(data.list[0].main.temp);
           for (var i = 0; i < 4; i += 1) { //the list is every 3 hours, so 3 x 4 = 12 hour time
             vm.temperature += data.list[i].main.temp;
             for (var j = 0; j < data.list[i].weather.length; j +=1) {
               var status = data.list[i].weather[j].main;
               switch(status) {
                 case 'Rain':
                    vm.Status = 'wi-rain';
                    break;
                  case 'Clouds':
                    vm.Status = 'wi-cloudy';
                    break;
                  case 'Snow':
                    vm.Status = 'wi-snow';
                    break;
                  default:
                    vm.Status =  'wi-day-sunny';
                    break;
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
