var fs = require('fs');

console.log('program stared');

fs.readFile('input.txt',function(err,data)
{
    if(err)
            return console.error(err)
    else  
            console.log(data.toString());

});

console.log('program ended');