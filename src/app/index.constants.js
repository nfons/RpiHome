(function() {
  'use strict';

  angular
    .module('rpiHome')
    .constant('CITY', 'Philadelphia')
    .constant('TECH_NEWS', 'https://www.reddit.com/r/technology.rss?sort=new')
    .constant('BUSINESS_NEWS', 'http://rss.cnn.com/rss/money_latest.rss')
    .constant('NEWS', 'http://feeds.reuters.com/reuters/topNews')
    .constant('TIME', '')
    .constant('STOCKS', { base_url: 'http://query.yahooapis.com/v1/public/yql?q=',
    select: 'select * from yahoo.finance.quotes where symbol in',
    env: '&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'
    })
    .constant('IMGUR_API', 'https://api.imgur.com/3/gallery/random/random/')
    .constant('WEATHER_API', 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=2de143494c0b295cca9337e1e96b00e0&q=');
})();
