const Router = require('express')
const router = new Router()
const CategoryController = require('../controller/category.controller')

router.post('/category', CategoryController.createCategory)
router.get('/category',  CategoryController.getCategories)
router.put('/category', CategoryController.updateCategory)
router.delete('/category/:id', CategoryController.deleteCategory)


module.exports = router