const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'default_secret_key_here';

async function register(req, res) {
  console.log("Register API");

  try {
    const { name, phone_number, email, password } = req.body;
    const existingUser = await User.findOne({ where: { phone_number } }); //check if phone number is already registered
    if (existingUser) {
      // phone number is already registered
      return res.status(400).json({ error: 'Phone number already exists' });
    }
    const user = await User.create({ name, phone_number, email, password });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
  console.log("Login API");
  const { phone_number, password } = req.body;

  try {

    const user = await User.findOne({ where: { phone_number } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    //Check if password is correct
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const payload = { id: user.id, name: user.name, email: user.email, phone_number: user.phone_number };
    //Generate a JWT token
    const token = jwt.sign(payload, secretKey);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register, login };