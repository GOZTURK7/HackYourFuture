const fs = require('fs');

var content = fs.readFile(process.argv[2], function(err,data){
    if(err){
        console.error(err);
    }
    else{
        console.log(data.toString().split('\n').length-1);
    }
})

// var content = fs.readFile(process.argv[2], function(err, data) {
//     if (err) {
//         console.error(err);
//     }else{
//         lines = content.toString().split('\n').length-1;
//         console.log(lines);
//     }
// });



