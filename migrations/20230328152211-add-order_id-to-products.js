'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('products', 'order_id', {
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('products', 'order_id')
  }
}
