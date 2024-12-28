const express = require('express');


const app = express();

const port = 3000;


app.get('/', (req, res) => {

    res.send('Hello stamp');

});

app.get('/welcome', (req, res) => {
    res.send('Welcome EveryOne');
});

app.listen(port, () =>{
    console.log(`Server is running on port : 127.0.0.1:${port}`);

})