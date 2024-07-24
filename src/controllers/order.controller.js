const db = require('../models')
const { getAverageOrder } = require('./customer.controller')
const Order = db.Order
const Customerஃ = db.Customer

async function getAllOrder(req, res) {
  try {
    const allOrder = await Order.findAll()
    return res.status(200).send({
      message: 'All Orders fetched SuccessFully',
      allOrder
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all Orders')
  }
}

async function getTotalRevenue(req, res) {
  try {
    const allOrder = await Order.findAll()
    const totalRev = allOrder.reduce((acc, cur) => {
      acc += Number(cur)
      return acc
    }, 0)
    return res.status(200).send({
      message: 'Total Revenue is',
      totalRev
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all products')
  }
}

async function averageOrderByCustomer(req, res) {
}



module.exports = {
  getAllOrder,
  getAverageOrder,
  getTotalRevenue,
  averageOrderByCustomer
}

