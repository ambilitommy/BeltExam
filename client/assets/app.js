var anguapp = angular.module('anguapp',['ngRoute']);
anguapp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl : 'partials/newUser.html',
      controller : 'newUserCtrl'
    })
    .when('/dashboard/:name',{
      templateUrl : 'partials/dashboard.html',
      controller : 'dashboardCtrl'
    })
    .when('/newques/:name',{
      templateUrl : 'partials/ques.html',
       controller : 'quesCtrl'
    })
    .when('/question/:name/:id',{
      templateUrl : 'partials/showQues.html',
       controller : 'showQuesCtrl'
    })
    .when('/question/:name/:id/new_answer',{
      templateUrl : 'partials/newAns.html',
       controller : 'newAnsCtrl'
    })
});
