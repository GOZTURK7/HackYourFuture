const express = require('express')
const app = express();
const axios = require('axios');


app.get('/', function (req, res) {
    axios.get('http://randomfox.ca/floof/')
    .then(response=>{
        const imageURL = response.data.image;
        res.redirect(imageURL);
    })
    .catch(err=>{
        consol.error(err.response.status);
        res.status(500);
        res.send('Ooops');
    })
    
})

app.listen(3000)
console.log('Running at Port 3000'); 