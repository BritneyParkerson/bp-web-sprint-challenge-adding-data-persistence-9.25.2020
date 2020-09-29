const express = require('express');

const proRoute = require('./files/proRoute');
const taskRoute = require('./files/resRoute');
const resRoute = require('./files/taskRoute');



const server = express();

server.use(express.json());
server.use('/api/projects/', proRoute);
server.use('/api/tasks/', resRoute);
server.use('/api/resources/', taskRoute);


module.exports = server;