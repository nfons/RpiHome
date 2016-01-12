(function(){
    'use strict';
    
    angular.module('rpiHome').directive('smartCycle', smartCycleDirective);
    
    function smartCycleDirective() {
        return {
          bindToController: true,
          restrict: 'E',
          controller: smartCycleCTRL,
          controllerAs: 'vm',
          templateUrl: 'app/components/smartCycle/smartCycle.html'
        };
    }
    
    /** @ngInject */
    function smartCycleCTRL($timeout, $interval) {
        var vm = this;
        vm.IndexToShow = 0;
        var max = 3;
        var time = new Date().getHours();
        vm.changeIndex = function() {
            if(time <= 12 && vm.IndexToShow === 0) { //traffic more if < 10AM
                $timeout(function() {
                    vm.IndexToShow = 1;
                }, 1000 * 60);
            } else if (time > 12 && vm.IndexToShow === 1) { //dinner plans more
                $timeout(function() {
                    vm.IndexToShow = 2;
                }, 1000 * 60);
            } else {
                vm.IndexToShow = (vm.IndexToShow+1 < max) ? vm.IndexToShow += 1 : 0;
            } 
        };
        
        $interval(function() {
           vm.changeIndex(); 
        }, 1000 * 60);
        
        $interval(function(){
            time = new Date().getHours();
        }, 1000 * 60 * 60);
    }
    
    
})();