const express = require('express');
const bodyParser = require('body-parser');


const health    = require('./route/health');
const app = express();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/health', health.getStatus)