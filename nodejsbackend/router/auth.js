const express = require("express");
const router = express.Router();

require('../db/conn');
const Contact = require('../model/contactSchema');

router.get('/', (req, res) => {
    res.send("Hello")
})

router.post('/contactus', async (req, res) => {
    const { name, surname, message, email, phone } = req.body;
    if(!name || !surname || !message || !email || !phone) {
        return res.status(422).json({error: "please Fill the required fields"});
    }

    try {
        const contact = new Contact({name, surname, message, email, phone});
        const result = await contact.save();
        if(result) {
            res.status(201).json({message: "Detail Saved Successfully"});
        }
    } catch (error) {
        res.status(500).json({error: "failed to save try again"})
    }
})

module.exports = router