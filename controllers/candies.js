var Candy = require('../models/candy.js');

//GET ALL
function getAll(req, res){
    Candy.find({}, function(err, candies){
        if (err) throw err;
        res.render('layout', {candies: candies});
    })
}

//CREATE Candy

function createCandy (req, res){
    var candy = new Candy;
    candy.name = req.body.name;
    candy.color = req.body.color;
    candy.qty = req.body.qty;

    candy.save(function(err){
        if (err) res.json(err);
        res.redirect('/candies');
    })
}

// Get One Candy

function getCandy(req, res){
    var id = req.params.id;

    Candy.findById({_id:id }, function(err, candy){
        if(err) throw err;
        res.json(candy);
    })
}

function updateCandy(req, res){
    var id = req.params.id;

    Candy.findById({_id:id}, function(err, candy){
        if(err) throw err;
        
        if(req.body.name) candy.name = req.body.name;
        if(req.body.color) candy.color = req.body.color;
        if(req.body.qty) candy.qty = req.body.qty;

        candy.save(function(err){
            if(err) throw err;
            res.json(candy);
        });
    })
}

function deleteCandy(req, res){
    var id = req.params.id;

    Candy.remove({_id: id}, function(err){
        res.json({message: 'candy successfully deleted'});
    })
}

module.exports = {
    getAll: getAll,
    createCandy: createCandy,
    getCandy: getCandy,
    updateCandy:updateCandy,
    deleteCandy:deleteCandy
}