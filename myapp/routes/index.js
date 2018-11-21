var express = require('express');
var router = express.Router();
var SaveToFile = require('../controller/SaveToFile')
var CompileFile = require('../controller/compile')
var Run = require('../controller/run')

var name = "";

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/compile', (req, res, next) => {
  let data = decodeURI(req.body.data);
  SaveToFile.saveToFile(data).then((value) => {
    console.log("Save File Successfully!");
    console.log("-------------------------");
    console.log(data);
    console.log("-------------------------");
    name = value;
    next();
  }, (value) => {
    console.log("Save File Failed!");
    let err = new Error(value);
    err.status = 500;
    next(err);
  });
}, (req, res, next) => {
  CompileFile.ComplieFile(name).then((value) =>{
    console.log("Compile File Successfully!");
    name = value;
    next();
  }, (value)=>{
    console.log(value);
    let err = new Error("Compiled Failed! Please check grammer!");
    err.status = 500;
    next(err);
  });
  
}, (req, res, next) => {
  Run.Run(name, decodeURI(req.body.param)).then((value) => {
    console.log("Run Successfully!")
    console.log("-------------------------");
    console.log("Output:\n" + value);
    console.log("-------------------------");
    res.status(200).send(value);
  }, (value) => {
    console.log(value);
    let err = new Error("Run Failed!");
    err.status = 500;
    if (value.killed) {
      err.message = "Time Limited";
    }
    next(err);
  });
});

module.exports = router;