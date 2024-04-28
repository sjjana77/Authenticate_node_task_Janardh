const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Spam = require('./Spam');

const Contact = sequelize.define('Contact', {
  contact_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Contact name is required'
      }
    }
  },
  contact_phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'Contact phone number is required'
      },
      isNumeric: {
        msg: 'Contact phone number must be numeric'
      },
      len: {
        args: [10, 15],
        msg: 'Contact phone number must be between 10 and 15 characters'
      }
    }
  }
});

Contact.hasMany(Spam, { foreignKey: 'phone_number', sourceKey: 'contact_phone_number' });

module.exports = Contact;
