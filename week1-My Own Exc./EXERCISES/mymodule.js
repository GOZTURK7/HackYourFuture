const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extension, callback) {
    fs.readdir(dirName, function(err,list){
        if(err) return callback(err);
        list = list.filter(function(listItem){
            return path.extname(listItem) === '.'+extension
        });
        callback(null, list);
    })
}