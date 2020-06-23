const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mongoose.connection;
const PORT = process.env.PORT || 5000;

db.on('open', () => console.log('connected'));
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(PORT);
