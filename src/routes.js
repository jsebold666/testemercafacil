const express = require('express');
const contacts = require('./controllers/contacts');
const auth = require('./middleware/auth');
const db = require('./middleware/db');

const routes = express.Router();

routes.post('/registerNewContacts', [auth.authenticateToken, db.getDbUri], contacts.store);
routes.get('/contacts', [auth.authenticateToken, db.getDbUri], contacts.index);
routes.post('/login', auth.login);

module.exports = routes;