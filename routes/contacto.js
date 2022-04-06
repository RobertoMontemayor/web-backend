const express = require('express')
var router = express.Router();
const db = require("../db-init");
router.post('/contacto', async(req, res)=>{
    console.log(req.body)
    const {name, email, message} = req.body
    console.log({nombreCompleto: name, email, message})
    const contacto = await db.contacto.create({nombreCompleto: name, correo:email, mensaje: message})
    res.send(contacto)
})
module.exports = router