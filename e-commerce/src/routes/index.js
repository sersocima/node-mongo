const { Router } = require("express")
const bodyParser = require('body-parser')

const UserController = require('../controllers/UserController')
const routes = Router()
const urlEncoderParser = bodyParser.urlencoded({
    extended: false
})
const jsonParser = bodyParser.json()

routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

routes.post('/users', jsonParser, (req, res) => {
    return UserController.createUser(req, res)
})
routes.get('/users')
routes.get('/users/:user_id')

routes.post('/login')

routes.post('/products/:user_id')
routes.get('/products')
routes.get('/products/:products_id')
routes.get('/products/:user_id')
routes.patch('/products/:user_id/:product_id')
routes.delete('/products/:user_id/_product_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')
routes.get('/cart/:user_id/:card_id')

module.exports = routes