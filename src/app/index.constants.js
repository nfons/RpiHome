(function() {
  'use strict';

  angular
    .module('rpiHome')
    .constant('CITY', 'Philadelphia')
    .constant('NEWS', '')
    .constant('TIME', '')
    .constant('WEATHER_API', 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=');
})();
