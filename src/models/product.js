module.exports = function walletSchema(sequelize, DataType) {
  const Product = sequelize.define('Product', {
    product_id: {
      type: DataType.STRING,
      // primaryKey: true,
      allowNull: false
    },
    product_name: {
      type: DataType.STRING,
      allowNull: true
    },
    category: {
      type: DataType.STRING,
      allowNull: false
    },
    region: {
      type: DataType.STRING,
      allowNull: false
    },
    quantity_sold: {
      type: DataType.INTEGER,
      allowNull: true
    },
    unit_price: {
      type: DataType.STRING,
      allowNull: true
    },
    discount: {
      type: DataType.STRING,
      allowNull: true
    },
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'product'
  })

  Product.associate = function mapRelation(models) {
    // Product.hasMany(models.Order, { foreignKey: 'product_id' })
  }

  return Product
}
