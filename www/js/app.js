/*
While writing this comment I thought of the things I could do with 1.4 million dollars...
But then again I would only charge $15,000 JMD for this code $50,000 JMD MAX! ($150-$500 USD)...

IBM WE NEED TO TALK FAM!

E-Mail: masters2020@gmail.com
Twitter: @_helium
*/
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('OnePointFourMillionDollas', function($scope, $timeout){
  $scope.img = "img/click.jpg";
  $scope.$IBM = function () {
     $scope.MakeMoneyWithOneLineOfCode = Math.random();
     if ($scope.MakeMoneyWithOneLineOfCode > 0.5) {
        $scope.img = "img/left.png";
        $timeout(function() {
          $scope.img = "img/click.jpg";
        }, 3000);
     }
     else {
        $scope.img = "img/right.png";
        $timeout(function() {
          $scope.img = "img/click.jpg";
        }, 3000);
     }
  }
})

//For the record I used Math.random(); cause I was lazy....Still works
//Will Adjust later for better line placement...