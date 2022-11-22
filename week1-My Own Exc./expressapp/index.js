const express = require('express')
const app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname+'/todo.html')
})

app.listen(3000)
console.log('Running at Port 3000'); 