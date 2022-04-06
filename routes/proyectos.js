const express = require('express')
var router = express.Router();
const db = require("../db-init");
const _ = require("lodash");
router.get('/proyectos', async(req, res)=>{
    res.json(await db.proyecto.findAll({attributes:[
        "id",
        "titulo",
        "descripcion",
        "fecha",
        "imgUrl"
    ]}))
})

router.get('/proyecto', async(req, res)=>{
    try {
        const [tecnologias] = await db.sequelize.query(`SELECT nombre FROM tecnologia INNER JOIN tecnologia_proyecto where tecnologia_proyecto.proyectoId = ${req.query.id} AND tecnologia_proyecto.tecnologiaId = tecnologia.id;`)
        const response = tecnologias.map(tecnologia => tecnologia.nombre)
        const [proyecto] = await db.sequelize.query(`SELECT githubLink FROM proyecto where proyecto.id = ${req.query.id};`)
        const {githubLink} = proyecto[0]
        res.send({tecnologias: response, githubLink })
    }catch(error){
        console.log(error)
    }
   
})
module.exports = router