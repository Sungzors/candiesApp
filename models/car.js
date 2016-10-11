var mongoose = require('mongoose');

var CarSchema = mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    mileage: Number,
    is_functional: Boolean
});

module.exports = mongoose.model('Car', CarSchema)