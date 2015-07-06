(function() {
  'use strict';

  angular.module('rpiHome').controller('MainController', mainCTRL);

  /** @ngInject */
  function mainCTRL(CITY, NEWS) {
    var vm = this;
    vm.currCity = CITY;
    vm.news = "google.com";
  }

})();
