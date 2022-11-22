const fileFilter = require('./mymodule.js');
const dirName = process.argv[2];
const extension = process.argv[3];

fileFilter(dirName, extension, function(err, data){
    if(err) return console.log(err);

    data.forEach(file => console.log(file));
})