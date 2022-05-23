const { Bus, Driver } = require('../models/models')
const ApiError = require('../errors/ApiError')

class busController {
	async create(req, res, next) {
		try {
			let { number, route, modelId, driverInfo } = req.body
			const bus = await Bus.create({ number, route, modelId })

			if (driverInfo) {
				driverInfo = JSON.parse(driverInfo)
				driverInfo.forEach(i =>
					Driver.create({
						name: i.name,
						firstname: i.firstname,
						phone: i.phone,
						driverId: Bus.id
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

	async getAll(req, res) {
		let buses = await Bus.findAll({})
		return res.json(buses)
	}

}

module.exports = new busController()