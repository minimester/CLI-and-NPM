let figlet = require('figlet');

module.exports = function(message) {
  let response = figlet.textSync(message, function (err, data) {
    if (err) {
      throw new Error('There was a problem!');
    }
  });
  
  return data;
}
