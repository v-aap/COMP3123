const express = require('express');
const app = express();
const SERVER_PORT = 3000

app.get('/hello', (req,res) => {
    res.send('<h1>Hello Express JS</h1>');
});

app.get('/user', (req,res) => {
    console.log(req.query);
    const fnm = req.query.firstname || 'Valeria'; 
    const lnm = req.query.lastname || 'Arce';
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);

});

app.post('/user/:fnm/:lnm/', (req, res) => {
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
