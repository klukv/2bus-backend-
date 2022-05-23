const Router = require('express')
const router = new Router()
const busController = require('../controllers/busController')

router.post('/', busController.create)
router.get('/', busController.getAll)
router.get('/:id', busController.getBus)

module.exports = router