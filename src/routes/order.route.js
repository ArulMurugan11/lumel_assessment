const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order.controller.js')


router.get('/getAllOrder', orderController.getAllOrder)
// router.get('/update', orderController.averageOrderByCustomer)
router.get('/totalRevenue', orderController.getTotalRevenue)
// router.get('/:userId', orderController.getWallet)


module.exports = router
