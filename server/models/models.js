const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'USER' }
}
)

const Driver = sequelize.define('driver', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	firstname: { type: DataTypes.STRING },
	phone: { type: DataTypes.STRING, unique: true },

}
)

const Bus = sequelize.define('bus', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	number: { type: DataTypes.INTEGER, unique: true, allowNull: false },
	route: { type: DataTypes.INTEGER, unique: true },
	rating: { type: DataTypes.INTEGER, defaultValue: 0 },
	img: { type: DataTypes.STRING },
}
)

const Model = sequelize.define('model', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	model: { type: DataTypes.STRING, unique: true, allowNull: false },
	year: { type: DataTypes.INTEGER },
}
)

const ratingUser = sequelize.define('ratingUser', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rate: { type: DataTypes.INTEGER, allowNull: false }
})

User.hasMany(ratingUser)
ratingUser.belongsTo(User)

Bus.hasMany(ratingUser)
ratingUser.belongsTo(Bus)

Model.hasMany(Bus)
Bus.belongsTo(Model)

Driver.hasMany(Bus)
Bus.belongsTo(Driver)

module.exports = {
	User,
	Driver,
	Bus,
	Model,
	ratingUser
}