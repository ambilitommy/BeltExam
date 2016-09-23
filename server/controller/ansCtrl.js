var mongoose = require('mongoose');
//var userModel = mongoose.model('Users');
var ansModel = mongoose.model('Ans');
var quesModel = mongoose.model('Ques');
function AnsController(){
  this.newAns = function(req,res){

    quesModel.findOne({_id:req.params.id},function(err,data){
  if(err){
    console.log(err);
  }
  else{
    var answer = new ansModel(req.body); //object with body detail corresponding to comments model
    answer._ques = data._id;
     answer.save(function(err,msg){
       console.log('this is data', data);
      data.ans.push(answer); //entering new msg data into messages model
      data.save(function(err){
        if(err){ console.log(err); }
      })
      if(!err){
        res.json(msg)
      }
      else{
        console.log("Error: "+err );
      }
    })
  }
})

      quesModel.findOne({_id:req.params.id},function(err,ques){
          if(err){
            console.log("ERROR "+err);
            res.json(err);
          }
          else{
            var anscount = ques.ans_count+1;
            quesModel.update({_id:req.params.id},{$set:{ans_count:anscount}},function(err,msg){
              if(err){
                console.log("ERROR "+err);
                res.json(err);
              }
              else{
                res.json(msg);
              }
            })
          }
        })
  }
}
module.exports = new AnsController();
