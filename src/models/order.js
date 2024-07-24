module.exports = function transactionSchema(sequelize, DataType) {
  const Order = sequelize.define(
    'Order',
    {
      order_id: {
        type: DataType.STRING,
        // primaryKey: true,
        allowNull: false
      },
      date_of_sale: {
        type: DataType.DATE,
        allowNull: true
      },
      shipping_cost: {
        type: DataType.STRING,
        allowNull: false
      },
      Payment_method: {
        type: DataType.STRING,
        allowNull: false
      },
      customer_id: {
        type: DataType.STRING,
        allowNull: false
      },
      product_id: {
        type: DataType.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'order'
    }
  )

  Order.associate = function mapRelation(models) {
    // Order.belongsTo(models.Customer, { foreignKey: 'customer_id' })
    // Transaction.belongsTo(User);
  }
  // Transaction.belongsTo(User, { foreignKey: 'userId' })

  return Order
  // module.exports = { Transaction }
}
