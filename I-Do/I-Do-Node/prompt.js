const prompt = require('prompt-sync')();
const figlet = require('figlet');

const name = prompt('What is your name?' )
console.log(name)



figlet(name, function(err, data) {
    console.log(data)
})