
     var http = require('http');
     var bl = require('bl');
     
     http.get(process.argv[2], function (response) {
         response.pipe(bl(function (err, data) {
             if (err) {
                 return console.error(err);
             }
             data = data.toString();
             console.log(data.length);
             console.log(data);
         }));
     });

    /*  What Does .pipe() Method Do?
The method .pipe was added in v0.9.4 of Node.js and its purpose is to attach a writeable stream to a readable stream allowing to pass the readable stream data to the writeable stream. One good way to understand this concept is by thinking about PVC pipes and connecting two pipes.*/