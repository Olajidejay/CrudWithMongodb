const contactService = require ('../services/ContactService');

exports.createContact = async (req, res) => {
    try {
        const contact = await contactService.createContact(req.body);
        res.json({ data: contact, status: 'success'});
    }   catch (err) {
        res.status(500).json({ error: err.message });
    }
};