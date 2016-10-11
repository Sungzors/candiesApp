var mongoose = require('mongoose');

var CandySchema = mongoose.Schema({
    name: String,
    color: String,
    qty: Number
});

module.exports = mongoose.model('Candy', CandySchema);