(function() {
  'use strict';

  angular.module('rpiHome').directive('stock', stockDirective);

  function stockDirective() {
    return {
      restrict: 'E',
      scope: {
        symbol: '@'
      },
      controller: stockCtrl,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/components/stocks/stocks.html'
    };
  }
  /** @ngInject */
  function stockCtrl(STOCKS, $http) {
    var vm = this;
    var tick = 1000; //1 secs

    vm.trend = 'neutral';

    function getData() {
      var url = STOCKS.base_url;

      var query= STOCKS.select + '("' + vm.symbol +'")';
      query = encodeURI(query) + STOCKS.env;
      $http.get(url+query).success(function(data){
        vm.price = data.query.results.quote.Bid;
        vm.price = Number(vm.price).toFixed(2); //keep to 2 decimal places
        vm.change = data.query.results.quote.ChangeinPercent;
        if(data.query.results.quote.Change!== null && data.query.results.quote.Change.indexOf('-') !== -1) {
          vm.trend = 'negative';
        } else {
          vm.trend = 'positive';
        }
      });

    }
    
    vm.getData = getData;
    
    getData();
    setInterval(function () { //jshint ignore:line
      getData();
    }, tick * 60 * 60); //every 60 mins
  }
})();
