const { Bus, Driver, Model } = require('../models/models')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')


class busController {
	async create(req, res, next) {
		try {
			let { number, route, rating, modelId, driverId } = req.body


			const bus = await Bus.create({ number, route, rating, modelId, driverId })

			return res.json(bus)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getBus(req, res) {
		const { id } = req.params
		const bus = await Bus.findOne(
			{
				where: { id },
			},

		)
		return res.json(bus)
	}

	async deleteBus(req, res) {

		const { number } = req.params
		const bus = await Bus.destroy({
			where: { number },
		})

		return res.json(bus)

	}

	async getBusNumber(req, res) {
		const { number } = req.params
		const bus = await Bus.findOne(
			{
				where: { number },
			},

		)
		return res.json(bus)
	}

	async getAll(req, res) {
		let buses = await Bus.findAll({})
		return res.json(buses)
	}

}

module.exports = new busController()