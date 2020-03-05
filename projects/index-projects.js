const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const projects = require('./components/projects/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

// ROUTER
app.use('/api/projects', projects);

app.use(errors);

app.listen(config.project.port, () => {
    console.log('Servicio de Projectos escuchando en el puerto ', config.project.port);
});