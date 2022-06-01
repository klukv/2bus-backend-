
const { Driver } = require('../models/models')
const ApiError = require('../errors/ApiError')

class driverController {
	async create(req, res, next) {
		try {
			const { name, firstname, phone, busId } = req.body
			const driver = await Driver.create({ name, firstname, phone, busId })
			return res.json(driver)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getBus(req, res) {

	}

	async getAll(req, res) {
		let drivers = await Driver.findAll({})
		return res.json(drivers)
	}

}
module.exports = new driverController()