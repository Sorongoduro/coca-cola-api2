const express = require('express')
const routerProducts = require('./routers/products')
const app = express()
require('./db/mongoose')
const cors = require('cors')
const router = express.Router()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json());
app.use(router)

app.use(routerProducts)

app.listen(port, () => {
    console.log('Corriendo en puerto ' + port)
})