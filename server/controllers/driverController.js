
const { Driver } = require('../models/models')
const ApiError = require('../errors/ApiError')

class driverController {
	async create(req, res, next) {
		try {
			const { name, firstname, phone } = req.body
			const driver = await Driver.create({ name, firstname, phone })
			return res.json(driver)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getDriver(req, res) {
		const { id } = req.params
		const driver = await Driver.findOne(
			{
				where: { id },
			},

		)
		return res.json(driver)
	}

	async getAll(req, res) {
		let drivers = await Driver.findAll({})
		return res.json(drivers)
	}

}
module.exports = new driverController()