const Router = require('express')
const router = new Router()
const modelBusController = require('../controllers/modelBusController')

router.post('/', modelBusController.create)
router.get('/', modelBusController.getAll)
router.get('/:id', modelBusController.getModel)

module.exports = router