const Router = require('express')
const router = new Router()
const SalespersonController = require('../controller/salesperson.controller')

router.post('/salesperson', SalespersonController.createSalesperson)
router.get('/salesperson',  SalespersonController.getSalespersons)
router.put('/salesperson', SalespersonController.updateSalesperson)
router.delete('/salesperson/:id', SalespersonController.deleteSalesperson)


module.exports = router