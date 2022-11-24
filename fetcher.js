const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('statusCode:', response && response.statusCode);
    return console.log('connection error:', error);
  }
  
  fs.writeFile(path, body, error => {
    if (error) {
      return console.log('file error:', error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});