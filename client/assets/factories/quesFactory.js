anguapp.factory('quesFac',function($http){
  factory ={};
    factory.newQues = function(username,questoadd,callback){
      $http.post('/newques/'+username,questoadd).then(function(returnedData){
        console.log(returnedData);
          callback();
      })
    }
    factory.index = function(callback){
      $http.get('/index').then(function(returnedData){
        console.log(returnedData);
          callback(returnedData);
      })
    }
    factory.indexOne = function(quesid,callback){
      $http.get('/index/'+quesid).then(function(returnedData){
        console.log(returnedData);
          callback(returnedData);
      })
    }
  return factory;
})
