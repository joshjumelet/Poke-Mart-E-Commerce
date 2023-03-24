'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Order.hasMany(models.Product, {
        foreignKey: 'order_id',
        as: 'orders',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Order.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders'
    }
  )
  return Order
}
