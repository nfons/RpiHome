// jscs:disable
(function() {
  'use strict';
  var $httpBackend;
  var defaultTemplate = '<rss-feed url="{{url}}"></rss-feed>';
  var $compile;
  var elem;
  var q= 'http://feeds.reuters.com/reuters/topNews';
  var $controller
  var $timeout;
  
  describe('rssFeed Directive', function(){
      beforeEach(module('rpiHome'));
      
      afterEach(function(){
         jasmine.clock().uninstall() 
      });
      
      beforeEach(function(){
        var scope;
        jasmine.clock().install()
        inject(function(_$httpBackend_, _$compile_, _$rootScope_, _$timeout_){
            $httpBackend = _$httpBackend_;  
            $compile = _$compile_;
            scope = _$rootScope_.$new();
            $timeout = _$timeout_;
            
         });
         jasmine.getJSONFixtures().fixturesPath='base/src/app/components/NewsRssFeed';
         //mock http call
         
         var mock = getJSONFixture('rssfeed.mock.json');
         $httpBackend.whenJSONP('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q='+encodeURIComponent(q)).respond(mock);
         scope.url= q;
         elem = compileDirective(defaultTemplate,scope);
         $controller = elem.controller('rssFeed')      
      });
      
      it('expect directive to be injected without issue', function(){
          expect($controller).toBeDefined();
          expect($timeout).toBeDefined();
      });
      
      it('expect controller to have the proper url injected', function(){
          expect($controller.url).toBe(q);
      });
      
      it('expect getRss to have worked correctly, by getting 1st elem', function(){
         $httpBackend.flush();
         expect($controller.currentItem).toBe(1);
      });
      
 
    function compileDirective(template, scope) {
        var elm = angular.element(template);
        $compile(elm)(scope);
        scope.$apply();
        return elm;
     }
  });
})();