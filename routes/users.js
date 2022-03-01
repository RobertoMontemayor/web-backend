const express = require('express')
var router = express.Router();

router.get('/users', (req, res)=>{
    res.send('Hello users')
})
module.exports = router