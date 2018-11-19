const exec = require('child_process').exec;
var md5 = require('md5');

var ComplieFile = (name) => {
  return new Promise((resolve, reject) => {
    let outname = "/home/ubuntu/CompileOnline/public/shell/" + md5(Date.now().toString());
    let cmd = "g++ -std=c++11 " + name + " -o " + outname;
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(err);
      else {
        if (stderr.length != 0) {
          reject(stderr);
        } else {
          resolve(outname);
        }
      }
    });
  });
};

exports.ComplieFile = ComplieFile;