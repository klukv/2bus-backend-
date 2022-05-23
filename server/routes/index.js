const Router = require('express')
const router = new Router()

const userRouter = require('./userRoute')
const busRouter = require('./busRoute')
const modelBusRouter = require('./modelBusRoute')

router.use('/user', userRouter)
router.use('/mainWindow', busRouter)
router.use('/model', modelBusRouter)

module.exports = router