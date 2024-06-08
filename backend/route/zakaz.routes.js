const Router = require('express')
const router = new Router()
const ZakazController = require('../controller/zakaz.controller')

router.post('/zakaz', ZakazController.createZakaz)
router.get('/zakaz',   ZakazController.getZakazs)
router.delete('/zakaz/:id', ZakazController.deleteZakaz)


module.exports = router