
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var stream = require('co-from-stream');
var methods = require('./methods');
var fs = require('fs-extra');

thunkify(fs, methods);
module.exports = fs;

// .exists is still messed

fs.exists = function (path) {
  return function (done) {
    fs.stat(path, function(err, res){
      done(null, !err);
    });
  };
};

// .createReadStream

fs.createReadStream = function () {
  return stream(fs.createReadStream.apply(null, arguments));
};
