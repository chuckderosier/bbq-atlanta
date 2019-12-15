const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const restaurantController = require('../controllers/restaurantController')
const mainController = require('../controllers/mainController')
const sideController = require('../controllers/sideController')
const dessertController = require('../controllers/dessertController')

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

router.get('/api/users/:userId/restaurant/main', mainController.index)
router.get('/api/users/:userId/restaurant/:restaurantId/main/:mainId', mainController.show)
router.post('/api/users/restaurant/main', mainController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId/main/:mainId', mainController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId/main/:mainId', mainController.delete)

router.get('/api/users/:userId/restaurant/side', sideController.index)
router.get('/api/users/:userId/restaurant/:restaurantId/side/:sideId', sideController.show)
router.post('/api/users/restaurant/side', sideController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId/side/:sideId', sideController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId/side/:sideId', sideController.delete)

router.get('/api/users/:userId/restaurant/dessert', dessertController.index)
router.get('/api/users/:userId/restaurant/:restaurantId/dessert/:dessertId', dessertController.show)
router.post('/api/users/restaurant/dessert', dessertController.create)
router.patch('/api/users/:usedId/restaurant/:restaurantId/dessert/:dessertId', dessertController.update)
router.delete('/api/users/:userId/restaurant/:restaurantId/dessert/:dessertId', dessertController.delete)

module.exports = router