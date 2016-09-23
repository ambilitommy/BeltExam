anguapp.controller('dashboardCtrl',function($scope,$routeParams,$location,quesFac){
  $scope.username = $routeParams.name;
  $scope.ques =[];
  $scope.index = function(){
    quesFac.index(function(data){
      $scope.ques = data.data;
    });
  }
   $scope.index();
})
