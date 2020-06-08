const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/mern', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('open', () => console.log('connected'));

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
