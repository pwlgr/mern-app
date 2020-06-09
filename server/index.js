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

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/mern', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('open', () => console.log('connected'));

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.post('/register', async (req, res) => {
	try {
		let { email, password } = req.body;

		if (!email || !password) return res.status(400).json({ msg: 'Not all fields have been entered.' });
		if (password.length < 5)
			return res.status(400).json({ msg: 'The password needs to be at least 5 characters long.' });

		const existingUser = await User.findOne({ email: email });
		if (existingUser) return res.status(400).json({ msg: 'An account with this email already exists.' });

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			password: passwordHash
		});
		const savedUser = await newUser.save();
		res.json(savedUser);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
