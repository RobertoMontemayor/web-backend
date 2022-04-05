const express = require('express')
var router = express.Router();
const db = require("../db-init");
router.get('/proyectos', async(req, res)=>{
    res.json(await db.proyecto.findAll())
})

router.get('/proyecto', (req, res)=>{
    console.log(req.query.id)
    res.send({tecnologias:["git","git","git","git","git"], githubLink: "https://github.com/RobertoMontemayor"})
})
module.exports = router