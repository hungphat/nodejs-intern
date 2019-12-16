const express    = require('express');
const bodyParser = require('body-parser');
const db         = require('./route/crud_nodejs');


const health    = require('./route/health');
const app = express();

app.listen(3000);
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/health', health.on_get)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)