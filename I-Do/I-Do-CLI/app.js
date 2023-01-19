const display = require('./src/display');
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname + '/heroes'), (err, files) => {
  if (err) {
    console.log(`Error: There was a problem!`);
  } 
  else {
    let file = files[Math.floor(Math.random() * files.length)];
    fs.readFile(path.join(`${__dirname}/heroes/${file}`), (err, data) => {
      console.log(display(data));
    });
  }
});
