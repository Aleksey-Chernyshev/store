const Router = require('express')
const router = new Router()
const ProductController = require('../controller/product.controller')

router.post('/product', ProductController.createProduct)
router.get('/product',  ProductController.getProductsId)
router.put('/product', ProductController.updateProduct)
router.delete('/product/:id', ProductController.deleteProduct)


module.exports = router