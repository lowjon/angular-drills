angular.module('apiApp')
.controller('mainCtrl', function ($scope, lukeServiceWalker) {


lukeServiceWalker.getLuke()
.then(luke =>{
    $scope.luke = luke;
    console.log(luke);
  })
})
