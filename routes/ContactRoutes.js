const express = require ('express');
const {
    createContact,
} = require ('../controllers/ContactControllers');

const router = express.Router();

router.route('/').post(createContact);

module.exports = router;