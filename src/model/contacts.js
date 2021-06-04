const Sequelize = require('sequelize');

const ContactsModel = {
  id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
  name: Sequelize.STRING,
  cellphone: Sequelize.STRING,
}

module.exports = ContactsModel;