const Router = require('express')
const router = new Router()
const driverController = require('../controllers/driverController')

router.post('/', driverController.create)
router.get('/', driverController.getAll)

module.exports = router