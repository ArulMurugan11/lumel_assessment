const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customer.controller')

router.get('/allCustomer', customerController.getAllcustomer)
// router.get('/customer_order', customerController.getCustomerOrder)
// router.get('/average_order', customerController.getAverageOrder)

module.exports = router
