anguapp.factory('ansFac',function($http){
  factory ={};
    factory.newAns = function(quesid,answertoadd,callback){
      console.log("entered answer fac");
       $http.post('/newans/'+quesid ,answertoadd).then(function(returnedData){
         console.log("all ok");
         callback();
       })
    }

  return factory;
})
