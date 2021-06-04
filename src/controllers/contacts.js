const Validator = require('validatorjs');
const Sequelize = require('sequelize');

const ContatcsModel = require('../model/contacts');
Validator.useLang('pt');

exports.store = async (req, res) => {
  try {
    const validationContacts = new Validator(req.body, {
      contacts: 'required',
      'contacts.*.name': 'required',
      'contacts.*.cellphone': 'required'
    });

    if (validationContacts.fails()) {
      return res.status(400).json({ erros: validationContacts.errors.all()});
    }
    
    var sequelize = '';
    sequelize = new Sequelize(req.DB_URI);
    await sequelize.authenticate();
    const Contacts = await sequelize.define('contacts', ContatcsModel); 
    await sequelize.sync(); 
    

    var query = '';
    if (req.user === 'macapa') {
      query = req.body.contacts.map(item => {
        var phone = `+${item.cellphone.slice(0,2)} (${item.cellphone.slice(2,4)}) ${item.cellphone.slice(4,9)}-${item.cellphone.slice(9,13)}`;
        return {
          name: item.name,
          cellphone: phone
        };
      });
    } else {
      query = req.body.contacts.map(item => {
        var phone = item.cellphone.slice(0,4)+item.cellphone.slice(5,13);
        return {
          name: item.name,
          cellphone: phone
        };
      });
    }
    
    const contacts = await Contacts.bulkCreate(query);
    
    return res.json(contacts);
  } catch (error) {
    res.json({ Erro: error });
  }
}

exports.index = async (req, res) => {
  try{
    var sequelize = '';
    sequelize = new Sequelize(req.DB_URI);
    await sequelize.authenticate();
    const Contact = await sequelize.define('contacts', ContatcsModel); 
    await sequelize.sync();

    const contacts =  await Contact.findAll();

    return res.json(contacts);
  } catch (error) {
    res.json({ Erro: error });
  }
}