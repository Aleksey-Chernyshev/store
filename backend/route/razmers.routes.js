const Router = require('express')
const router = new Router()
const RazmersController = require('../controller/razmers.controller')

router.get('/razmers', RazmersController.getRazmers)



module.exports = router