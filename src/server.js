const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const HOST = '0.0.0.0';

const health    = require('./route/health');
const hello     = require('./route/hello');
const db        = require('./route/crudnodejs');
const conectdb  = require('./model/resetdb');


const app = express();

// listen at port :PORT - default as 3000

app.listen(PORT,HOST);

// register the route(s)
app.route('/health').get(health.on_get);

//Midleway to Json
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.route('/hello'      ).get(hello.on_get);
app.route('/hello/'     ).get(hello.on_get);
app.route('/hello/:name').get(hello.on_get);
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

// print ready
console.log(`api server started at port=${PORT}`);
