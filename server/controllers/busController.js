const { Bus, Driver, Model } = require('../models/models')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')

class busController {
	async create(req, res, next) {
		try {
			let { number, route, rating, modelId, driverInfo } = req.body
			const { img } = req.files
			let filename = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', filename))

			const bus = await Bus.create({ number, route, rating, modelId, img: filename })

			if (driverInfo) {
				driverInfo = JSON.parse(driverInfo)
				driverInfo.forEach(i =>
					Driver.create({
						name: i.name,
						firstname: i.firstname,
						phone: i.phone
					})
				)
			}
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
				include: [{ model: Driver, as: 'driverInfo' }]
			},

		)
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