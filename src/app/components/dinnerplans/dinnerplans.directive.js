(function(){
    'use strict';
    angular.module('rpiHome').directive('dinnerPlans', dinnerDirective);
    
    function dinnerDirective(){
        return{
            bindtoController:true,
            controller: dinnerController,
            controllerAs: 'vm',
            restrict:'E',
            templateUrl:'app/components/dinnerplans/dinnerplans.html'
        };
    }
    /** @ngInject */
    function dinnerController($http){
        var vm = this;
        $http.get('http://localhost:8181/dinner').success(function(data){
            vm.dinner = data;
        });
    }
})();