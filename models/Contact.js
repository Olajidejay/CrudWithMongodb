const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    Name: String,
    email: String,
    phone: String,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Contact', contactSchema);