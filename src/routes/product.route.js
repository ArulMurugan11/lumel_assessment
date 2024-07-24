const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller.js')


router.get('/getAll', productController.getAllproduct)
router.get('/getByCategory', productController.getProductByCatogory)
router.get('/getByRegion', productController.getProductByRegion)




module.exports = router
