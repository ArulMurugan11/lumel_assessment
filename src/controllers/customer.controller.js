const db = require('../models')
const Customer = db.Customer
const Order = db.Order

async function getAllcustomer(req, res) {
  try {
    const allCustomer = await Customer.findAll()
    return res.status(200).send({
      message: 'All Products fetched SuccessFully',
      allProducts
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all products')
  }
}

async function getCustomerOrder(req, res) {
  const category = req.body?.category
  try {
    const allOrders = await Order.findAll()
    return res.status(200).send({
      message: 'All Products fetched by category SuccessFully',
      allOrders
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all products by categoryF')
  }
}

async function getAverageOrder(req, res) {
  const region = req.body?.region
  try {
    const allProducts = await Product.findAll({
      where: {
        region
      },
      group: ['region'],
    })
    return res.status(200).send({
      message: 'All Products fetched by region SuccessFully',
      allProducts
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all products by region')
  }
}


module.exports = {
  getAllcustomer,
  getCustomerOrder,
  getAverageOrder,
}
