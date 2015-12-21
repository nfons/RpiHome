(function(){
  'use strict';
  angular.module('rpiHome').directive('imgurGallery', imgurGalleryDirective);

  function imgurGalleryDirective() {
    return {
      restrict: 'E',
      bindToController: true,
      controller: imgurGalleryController,
      controllerAs:'vm',
      templateUrl: 'app/components/imgurGallery/imgurGallery.html'
    };
  }

  /** @ngInject */
  function imgurGalleryController(IMGUR_API, $http, $log) {
    var vm = this;
    vm.image = undefined; //image place holder
    var images;

    function getRandomGallery() {
      var rand = Math.floor(Math.random() * (4 - 1)) + 1; //get a random int # between 1 and 4 (1-3)
      $http.get(IMGUR_API + rand).success(function(data){
        images = data;
      }).error(function(){
        getRandomGallery(); //retry
      }).finally(function(){
        var randImgIndx = Math.floor(Math.random() * (images.data.length - 0));
        vm.image = images.data[randImgIndx].link;
      });
    }

    function getRandomImage() {
      try{
        var randImgIndx = Math.floor(Math.random() * (images.data.length - 0));
        vm.image = images.data[randImgIndx].link;
      } catch (e) {
        $log.error(e);
      }
    }

    setInterval(function () { //jshint ignore : line
      getRandomGallery();
    }, 1000 * 60 * 15); //every 15 min get new gallery

    setInterval(function () { //jshint ignore : line
      getRandomImage();
    }, 1000 * 60 ); //every 1min get new image

    getRandomGallery(); //init call

  }
})();