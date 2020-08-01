// just for node vs nodemone
// setInterval(() => {console.log(.5)},500)

const express = require('express');
const app = express();

app.all('*',(req,res) => {
    res.send('<h1> This is express, I rule it all');
})

app.listen(4000);
console.log('listening on port 4000')