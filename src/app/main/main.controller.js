(function() {
  'use strict';

  angular
    .module('rpiHome')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(CITY, NEWS) {
    var vm = this;
    vm.currCity = CITY;
    vm.news = "google.com";

  }
})();
