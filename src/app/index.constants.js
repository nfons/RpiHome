(function() {
  'use strict';

  angular
    .module('rpiHome')
    .constant('CITY', 'Philadelphia')
    .constant('TECH_NEWS', 'https://www.reddit.com/r/technology.rss?sort=new')
    .constant('NEWS', 'http://rss.cnn.com/rss/cnn_topstories.rss')
    .constant('TIME', '')
    .constant('WEATHER_API', 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=');
})();
