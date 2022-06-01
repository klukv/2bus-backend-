const Router = require('express')
const router = new Router()

const userRouter = require('./userRoute')
const busRouter = require('./busRoute')
const modelBusRouter = require('./modelBusRoute')
const driverRouter = require('./driverRoute')

router.use('/user', userRouter)
router.use('/BUS', busRouter)
router.use('/model', modelBusRouter)
router.use('/driver', driverRouter)

module.exports = router