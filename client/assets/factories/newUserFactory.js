anguapp.factory('newUserFac',function($http){
  factory ={};
    factory.newUser = function(usertoadd,callback){
      $http.post('/newUser',usertoadd).then(function(returnedData){
          callback();
      })
    }
  return factory;
})
