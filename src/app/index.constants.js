(function() {
  'use strict';

  angular
    .module('rpiHome')
    .constant('CITY', 'Philadelphia')
    .constant('TECH_NEWS', 'https://www.reddit.com/r/technology.rss?sort=new')
    .constant('NEWS', 'http://feeds.reuters.com/reuters/topNews')
    .constant('TIME', '')
    .constant('WEATHER_API', 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=2de143494c0b295cca9337e1e96b00e0&q=');
})();
