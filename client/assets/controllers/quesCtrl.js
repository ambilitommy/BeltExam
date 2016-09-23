anguapp.controller('quesCtrl',function($scope,$location,$routeParams,quesFac){
$scope.username = $routeParams.name;
  $scope.newQues = function(){
     quesFac.newQues($scope.username,$scope.ques,function(){
       $location.path('/dashboard/'+$scope.username);
     })
  }
})
