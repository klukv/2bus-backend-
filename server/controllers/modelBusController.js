
const { Model } = require('../models/models')
const ApiError = require('../errors/ApiError')

class modelBusController {
	async create(req, res, next) {
		try {
			const { model, year } = req.body
			const modelBus = await Model.create({ model, year })
			return res.json(modelBus)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getBus(req, res) {

	}

	async getAll(req, res) {

	}

}
module.exports = new modelBusController()