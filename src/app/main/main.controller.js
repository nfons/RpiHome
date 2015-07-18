(function() {
  'use strict';

  angular.module('rpiHome').controller('MainController', mainCTRL);

  /** @ngInject */
  function mainCTRL(CITY, TECH_NEWS, NEWS) {
    var vm = this;
    vm.currCity = CITY;
    vm.news = NEWS;
    vm.tech = TECH_NEWS;
  }

})();
