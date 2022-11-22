var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var extension = process.argv[3];

fs.readdir(folder, function(err,data){
    if(err){
        console.log(err);
    }else{
        data.forEach(function(file){
            if(path.extname(file)==='.'+extension){
                console.log(file);
            }
        })
    }
})
