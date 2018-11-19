const exec = require('child_process').exec;
var fs = require("fs");
var md5 = require('md5');

var Run = (name, param) => {
  return new Promise((resolve, reject) => {
    let inputname = "/home/ubuntu/CompileOnline/public/input/" + md5(Date.now().toString());
    fs.writeFile(inputname, param, (err) => {
      if (err) reject("Save Input Failed!");
      else {
        let cmd = name + " < " + inputname;
        if (!param) {
          cmd = name;
        }
        exec(cmd, {
          timeout: 2000
        }, (err, stdout, stderr) => {
          if (err) reject(err);
          else {
            if (stderr.length != 0) {
              reject(stderr);
            } else {
              resolve(stdout);
            }
          }
        });
      }
    })
  });
};

exports.Run = Run;