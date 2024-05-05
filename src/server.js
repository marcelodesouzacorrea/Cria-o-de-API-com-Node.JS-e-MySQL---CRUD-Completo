require('dotenv').config({path:'variaveis.env'})
const exports = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = exports();
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))

server.listen(process.env.PORT, ()=>{
    console.log('Servidor rodando em http://localhost:${}')
})