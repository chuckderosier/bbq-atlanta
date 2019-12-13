const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const restaurantController = require('../controllers/restaurantController')
const mainsController = require('../controllers/mainsController')
const sidesController = require('../controllers/sidesController')
const dessertsController = require('../controllers/dessertsController')

router.get('/api/users', userController.index)
router.get('/api/users/:userId', userController.show)
router.post('/api/users', userController.create)
router.patch('/api/users/:usedId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/restaurant', restaurantController.index)
router.get('/api/users/:userId/restaurant/:restaurantId', restaurantController.show)
router.post('/api/users/restaurant', restaurantController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId', restaurantController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId', restaurantController.delete)

router.get('/api/users/:userId/restaurant/mains', mainsController.index)
router.get('/api/users/:userId/restaurant/:restaurantId/mains/:mainsId', mainsController.show)
router.post('/api/users/restaurant/mains', mainsController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId/mains/:mainsId', mainsController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId/mains/:mainsId', mainsController.delete)

router.get('/api/users/:userId/restaurant/sides', sidesController.index)
router.get('/api/users/:userId/restaurant/:restaurantId/sides/:sidesId', sidesController.show)
router.post('/api/users/restaurant/sides', sidesController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId/sides/:sidesId', sidesController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId/sides/:sidesId', sidesController.delete)

router.get('/api/users/:userId/restaurant/desserts', dessertsController.index)
router.get('/api/users/:userId/restaurant/:restaurantId/desserts/:dessertsId', dessertsController.show)
router.post('/api/users/restaurant/desserts', dessertsController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId/desserts/:dessertsId', dessertsController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId/desserts/:dessertsId', dessertsController.delete)

module.exports = router