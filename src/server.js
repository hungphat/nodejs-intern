const express = require('express');
const bodyParser = require('body-parser');

const health    = require('./route/health');
const hello     = require('./route/hello');
const db        = require('./route/alldb');
const conectdb  = require('./model/conectdb');


let app = express();

// listen at port :PORT - default as 3000
let port = process.env.PORT || 3000;
app.listen(port);

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
console.log(`api server started at port=${port}`);
