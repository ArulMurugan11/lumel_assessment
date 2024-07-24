const express = require('express')
const router = express.Router()
const csvController = require('../controllers/load_csv_to_db.js')

router.post('/csv', csvController.loadCSV)

module.exports = router
