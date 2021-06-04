    
const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use(routes);
server.listen(process.env.PORT);

module.exports = server;