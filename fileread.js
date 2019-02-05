var fs= require('fs');

console.log('progarm stared');

var data = fs.readFileSync('input.txt');

console.log(data.toString());


console.log('program ended');