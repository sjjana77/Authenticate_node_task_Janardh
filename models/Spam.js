const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Spam = sequelize.define('Spam', {
  phone_number: {
    type: DataTypes.STRING,
    unique: true
  },
  spam_score: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  spam_reasons: {
    type: DataTypes.TEXT,
    defaultValue: 'W10='
  }
});

module.exports = Spam;