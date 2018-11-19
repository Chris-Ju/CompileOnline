var fs = require("fs");
var Promise = require('promise');
var md5 = require('md5');


var saveToFile = (data) => {
  let name = "/home/ubuntu/CompileOnline/public/code/" /*"E:\\Git\\CompileOnline\\myapp\\public\\code\\"*/ + md5(Date.now().toString()) + ".cpp";
  return new Promise((resolve, reject) => {
    fs.writeFile(name, data, (err) => {
      if (err) reject(err);
      else resolve(name);
    })
  });
}

exports.saveToFile = saveToFile;