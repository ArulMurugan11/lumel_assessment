const db = require('../models')
const Product = db.Product
// const User = db.User

async function getAllproduct(req, res) {
  try {
    const allProducts = await Product.findAll()
    return res.status(200).send({
      message: 'All Products fetched SuccessFully',
      allProducts
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all products')
  }
}

async function getProductByCatogory(req, res) {
  const category = req.body?.category
  try {
    const allProducts = await Product.findAll({
      where: {
        category
      },
      group: ['category'],
    })
    return res.status(200).send({
      message: 'All Products fetched by category SuccessFully',
      allProducts
    })
  } catch (err) {
    return res.status(400).send('Error while fetch all products by categoryF')
  }
}

async function getProductByRegion(req, res) {
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
  getAllproduct,
  getProductByCatogory,
  getProductByRegion,
}
