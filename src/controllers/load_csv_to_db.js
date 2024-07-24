const db = require('../models')
const Order = db.Order
const Product = db.Product
const Customer = db.Customer
const Op = db.Sequelize.Op
const fs = require('fs')
let results = []
async function loadCSV(req, res) {
    fs.readFile('./sales_details.csv', 'utf8', async (err, data) => {
        if (err) {
            console.log('error while read data', err);
        }
        if (data) {
            let op = data.split('\n')
            op.forEach(data => {
                results.push(data.split(','))
            })
            console.log('data is', results);
            const len = results.length
            console.log('here comming------------------', results)
            console.log('here end---------------', results.length)
            // if (results.length > 1) {
            for (let i = 1; i < len; i++) {
                console.log('ababab----------------', results[i][2])
                let customer = {
                    customer_id: results[i][2],
                    customerName: results[i][12],
                    customer_email: results[i][13],
                    customer_address: `${results[i][14]},${results[i][15]},${results[i][16]}`
                }
                let order = {
                    order_id: results[i][0],
                    customer_id: results[i][2],
                    product_id: results[i][1],
                    date_of_sale: results[i][6],
                    shipping_cost: results[i][10],
                    Payment_method: results[i][11]
                }

                let product = {
                    product_id: results[i][1],
                    product_name: results[i][3],
                    category: results[i][4],
                    region: results[i][5],
                    quantity_sold: results[i][7],
                    unit_price: results[i][8],
                    discount: results[i][9],
                }
                try {
                    await Customer.create(customer)
                    await Product.create(product)
                    await Order.create(order)
                } catch (err) {
                    console.log('error while load csv', err);
                }
            }
            return res.status(200).send('data uploaded successfullyF')
        }
        // }
    })

}

module.exports = {
    loadCSV
}