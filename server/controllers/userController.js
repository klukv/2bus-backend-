const ApiError = require('../errors/ApiError')
const bcrypt = require('bcrypt')
const { User } = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJWT = (id, email) => {
	return jwt.sign(
		{ id, email },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' }
	)
}

class userController {
	async registration(req, res, next) {
		const { name, email, password } = req.body
		if (!name || !email || !password) {
			return next(ApiError.badRequest('Некорректный email или password. МБ Имя'))
		}
		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(ApiError.badRequest('Такой email уже используется другим пользователем'))
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const user = await User.create({ name, email, password: hashPassword })
		const token = generateJWT(user.name, user.id, user.email)
		return res.json({ token })
	}

	async login(req, res, next) {
		const { email, password } = req.body
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return next(ApiError.internal('Бедолага не найден'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Пароль не совпадает (Бедолага)'))
		}
		const token = generateJWT(user.id, user.email)
		return res.json({ token })
	}

	async check(req, res, next) {
		const token = generateJWT(req.user.id, req.user.email)
		return res.json({ token })
	}
}

module.exports = new userController()