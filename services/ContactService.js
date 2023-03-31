const ContactModel = require ('../models/Contact');

exports.createContact = async (contact) => {
    return await ContactModel.create(contact);
};