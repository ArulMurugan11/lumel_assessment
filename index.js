const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/models')
const port = process.env.PORT || 3000
const customerRouter = require('./src/routes/customer.route')
const productRouter = require('./src/routes/product.route')
const orderRouter = require('./src/routes/order.route')
const csvRouter = require('./src/routes/load_csv.router')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use('/customer', customerRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
app.use('/csv', csvRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(statusCode).json({ message: err.message })
})

db.sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
