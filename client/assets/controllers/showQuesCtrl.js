anguapp.controller('showQuesCtrl',function($scope,$location,$routeParams,quesFac){
  $scope.quesA = [];
  $scope.username = $routeParams.name;
  $scope.quesId = $routeParams.id;
  $scope.index = function(){
    quesFac.indexOne($routeParams.id,function(data){
      console.log(data.data);
      $scope.quesA = data.data;
    });
  }
  $scope.index();
})
