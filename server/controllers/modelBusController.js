
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

	async getModel(req, res) {
		const { id } = req.params
		const model = await Model.findOne(
			{
				where: { id },
			},

		)
		return res.json(model)
	}

	async getAll(req, res) {
		let model = await Model.findAll({})
		return res.json(model)
	}

}
module.exports = new modelBusController()