const express = require('express');
const Demo = require('./Controller/logic');
const app = express();

app.get('/', function(req, res) {
      res.send("hello");
} );
  
app.post('/sum', function(req, res) {
  try{
    console.log(req.body);
    var result = new Demo().sum(req); 
    console.log(result);
    res.json(result);    
  }
  catch(error){
    var msg = {
      msg : `sum fail in route [ERROR]${error}`
    }
    res.send(msg);
  }
});


app.post('/minus', function(req, res) {
  try{
    console.log(req.body);
    var result = new Demo().minus(req);
    console.log(result);
    res.json(result);    
  }
  catch(error){
    var msg = {
      msg : `minus fail in route [ERROR]${error}`
    }
    res.send(msg);
  }
});


app.post('/multiplied', function(req, res) {
  try{
    var reuslt = new Demo().multiplied(req);
    res.json(reuslt);    
  }
  catch(error){
    var msg = {
      msg : `mutiplied fail in route [ERROR]${error}`
    }
    //res.send(msg);
    console.error(error);
  }
});


app.post('/divide', function(req, res) {
  try{
    var reuslt = new Demo().divide(req);
    res.json(reuslt);    
  }
  catch(error){
    var msg = {
      msg : `divide fail in route [ERROR]${error}`
    }
    res.send(msg);
  }
});
module.exports = app;