const { Op, Sequelize } = require('sequelize');
const User = require('../models/User');
const Spam = require('../models/Spam');
const Contact = require('../models/Contact');
const base64url = require('base64url');

async function searchByPhone(req, res) {
  try {
    const { phone_number } = req.params;

    //Search user in users table
    let results = await User.findAll({
      where: {
        phone_number
      },
      include: [
        {
          model: Spam,
          attributes: ['spam_score', 'spam_reasons'],
          where: {
            phone_number: Sequelize.col('User.phone_number')
          },
          required: false
        }
      ]
    });

    //If user is not found, search in contacts table
    if (results.length === 0) {
      results = await Contact.findAll({
        where: {
          contact_phone_number: phone_number
        },
        include: [
          {
            model: Spam,
            attributes: ['spam_score', 'spam_reasons'],
            where: {
              phone_number: Sequelize.col('Contact.contact_phone_number')
            },
            required: false
          }
        ]
      });
    }

    //Decode spam_reasons
    results.forEach(result => {
      if (result.Spams) {
        result.Spams.forEach(spam => {
          spam.spam_reasons = base64url.decode(spam.spam_reasons);
        });
      }
    });


    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function searchByName(req, res) {
  try {
    const { name } = req.params;

    //Search user in users table
    let results = await User.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`
        }
      },
      include: [
        {
          model: Spam,
          attributes: ['spam_score', 'spam_reasons'],
          where: {
            phone_number: Sequelize.col('User.phone_number')
          },
          required: false
        }
      ]
    });

    //If user is not found, search in contacts table
    if (results.length === 0) {
      results = await Contact.findAll({
        where: {
          contact_name: {
            [Op.like]: `${name}%`
          }
        },
        include: [
          {
            model: Spam,
            attributes: ['spam_score', 'spam_reasons'],
            where: {
              phone_number: Sequelize.col('Contact.contact_phone_number')
            },
            required: false
          }
        ]
      });
    }

    //Decode spam_reasons
    results.forEach(result => {
      if (result.Spams) {
        result.Spams.forEach(spam => {
          spam.spam_reasons = base64url.decode(spam.spam_reasons);
        });
      }
    });

    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { searchByName, searchByPhone };
