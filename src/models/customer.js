module.exports = function userSchema(sequelize, DataType) {
  const Customer = sequelize.define(
    'Customer',
    {
      customer_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      customerName: {
        type: DataType.STRING,
        allowNull: false
      },
      customer_email: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'Invalid Email'
          }
        }
      },
      customer_address: {
        type: DataType.STRING,
        allowNull: true
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'customer'
    }
  )

  Customer.associate = function mapRelation(models) {
    Customer.hasMany(models.Order, { foreignKey: 'customer_id' })
  }
  return Customer
}