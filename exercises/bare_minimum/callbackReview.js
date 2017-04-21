/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var rl = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  var urlArray = [];

  if (fs.existsSync(filePath)) {
    var linereader = rl.createInterface({
      input: fs.createReadStream(filePath)
    });

    linereader.on('line', function(line) {
      urlArray.push(line);
    });

    linereader.on('close', function(line) {
      callback(null, urlArray[0]);
    });
  } else {
    var err = {code: 'ENOENT'};
    callback(err);
  }
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url);
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
