const Router = require('express')
const router = new Router()
const ZakazanoController = require('../controller/zakazano.controller')

router.post('/zakazano', ZakazanoController.createSpecTTN)
router.get('/zakazano',  ZakazanoController.getSpecTTNs)
router.put('/zakazano', ZakazanoController.updateSpecTTN)
router.delete('/zakazano/:id', ZakazanoController.deleteSpecTTN)


module.exports = router