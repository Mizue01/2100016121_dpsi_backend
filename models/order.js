// models/order.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Customer = require('./customer');
const Employee = require('./employee');
const Shipper = require('./Shipper');

const Order = sequelize.define('Order', {
orderID: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
customerID: {
type: DataTypes.INTEGER,
allowNull: false,
references:{
    model: Customer,
    key:'customerID'
}
},
firstName: {
type: DataTypes.STRING,
allowNull: false
},
employeeID: {
type: DataTypes.INTEGER,
allowNull: false,
references:{
    model: Employee,
    key:'employeeID'
}
},
orderDate: {
type: DataTypes.DATE,
allowNull: false
},
shipperID: {
type: DataTypes.INTEGER,
allowNull: false,
references:{
    model: Shipper,
    key:'ShipperID'
}
}
});

//relasi Order dengan Customer
Order.belongsTo(Customer,{foreignKey:'customerID'});
Customer.hasMany(Order,{foreignKey:'customerID'});

//relasi order dengan shipper
Order.belongsTo(Shipper, {foreignKey:'shipperID'});
Shipper.hasMany(Order,{foreignKey:'shipperID'});

//relasi Order dengan employee
Order.belongsTo(Employee,{foreignKey:'employeeID'});
Employee.hasMany(Order,{foreignKey:'employeeID'});

module.exports = Order;