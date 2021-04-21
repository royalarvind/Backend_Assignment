const express = require('express')
require('./db/mongoose')
const personRouter = require('./routers/Aggreport')

const app = express()
const port = process.env.PORT || 3000

//Use routers
app.use(express.json())
app.use(personRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})