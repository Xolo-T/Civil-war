// just for node vs nodemone
// setInterval(() => {console.log(.5)},500)
const path = require('path');

const express = require('express');
const app = express();

// To make the files accessible e.g the pic
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(path.join(__dirname + "/node.html"));
    res.sendFile(path.join(__dirname + '/public/node.html'));
    // res.send()
})


// this comes to the end incase no route/ URL ios matcged
app.all('*',(req,res) => {
    res.send('<h1> Sorry, this page does not exist');
})

app.listen(4000);
console.log('listening on port 4000')