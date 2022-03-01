const express = require('express')
const app = express()
const port = 3000
const helloWorldRouter = require('./routes/helloworld')
const usersRouter = require('./routes/users')
app.use(helloWorldRouter,usersRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})