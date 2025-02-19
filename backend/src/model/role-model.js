const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Role = sequelize.define('Role', {
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Role;
