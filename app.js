const express = require('express')
const app = express()
const port = 4000
const helloWorldRouter = require('./routes/helloworld')
const usersRouter = require('./routes/users')
const projectsRouter = require('./routes/proyectos')
const contactoRouter = require('./routes/contacto')
const cors = require('cors')
var allowedOrigins = ['http://localhost:3000'];
app.use(express.json())
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    // if(!origin) return callback(null, true);
    // if(allowedOrigins.indexOf(origin) === -1){
    //   var msg = 'The CORS policy for this site does not ' +
    //             'allow access from the specified Origin.';
    //   return callback(new Error(msg), false);
    // }
    return callback(null, true);
  }
}));
require("./db-init");

app.use(helloWorldRouter,usersRouter, projectsRouter, contactoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})