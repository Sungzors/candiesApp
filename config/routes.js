var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var candiesController = require('../controllers/candies.js')
var carsController = require('../controllers/cars.js')

router.route('/candies')
    .get(candiesController.getAll)
    .post(candiesController.createCandy);

router.route('/candies/:id')
    .get(candiesController.getCandy)
    .patch(candiesController.updateCandy)
    .delete(candiesController.deleteCandy)

router.route('/cars')
    .get(carsController.getAll)
    .post(carsController.createCar)

// router.route('/cars/:id')
//     .get(carsController.getCandy)
//     .patch(carsController.updateCandy)
//     .delete(carsController.deleteCandy)

module.exports = router;