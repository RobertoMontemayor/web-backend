const express = require('express')
var router = express.Router();

router.post('/contacto', (req, res)=>{
    console.log(req.body)
    res.send('Hello users')
})
module.exports = router