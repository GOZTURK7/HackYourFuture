const express = require('express')
const app = express();
const axios = require('axios');


app.get('/', function (req, res) {
    axios.get('http://randomfox.ca/floof/')
    .then(response=>{
        const imageURL = response.data.image;
        res.send(`
        <html>
    <head>
        <title>HYF Random Fox</title>
    </head>
    <body>
        <img src=${imageURL} style="width: %50">
        <form action="/" method="GET">
            <input type="submit" value="Next">
        </form>
    </body>
</html>
        `)
    })
    .catch(err=>{
        consol.error(err.response.status);
        res.status(500);
        res.send('Ooops');
    })
    
})

app.listen(3000)
console.log('Running at Port 3000'); 