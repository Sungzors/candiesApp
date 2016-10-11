var Car = require('../models/car.js');

//GET ALL

function getAll(req, res){
    Car.find(function(err, cars){
        if(err) throw err;
        res.json(cars);
    })
}

//POST NEW Car

function createCar (req, res){
    var car = new Car;
    car.make = req.body.make;
    car.model = req.body.model;
    car.year = req.body.year;
    car.color = req.body.color;
    car.mileage = req.body.mileage;
    car.is_functional = req.body.is_functional;
    
    car.save(function (err){
        if (err) throw err;
        res.redirect('/cars');
    });
}

module.exports = {
    getAll: getAll,
    createCar: createCar
}