const express = require('express');
const app = express();

// app.all('/', (req, res) =>{
//     res.send('<h1>Response from expressRoutes at 8000 </h1>')
// });
// express works from top down
// when ever you have multiple routes with same methods and URL 
// just the first one gets run

app.get('/', (req, res) => {
    res.send('<h1>Response from GET request </h1>')
});

app.post('/', (req, res) =>{
    res.send("<h1>Response from POST request </h1>");
});

app.put('/', (req, res) => {
    res.send("<h1>Response from PUT request </h1>");
});

app.delete('/', (req, res) => {
    res.send("<h1>Response from DELETE request </h1>");
});

app.listen(8000, console.log('ExpressRouter : 8000'));