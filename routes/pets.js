var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({

});

var Pet = mongoose.model('Pet', petSchema);

// Get All Pets
router.get('/', function(req, res, next) {
  Pet.find({})
    .then(function(result){
      res.json(result)
    })
    .catch(function(err){
      res.json(err)
    })  
});

// Get One Pet
router.get('/:id', function(req, res, next) {
  Pet.findOne({_id: req.params.id})
    .then(function(result){
      res.json(result)
    })
    .catch(function(err){
      res.json(err)
    })
});

// Create New Pet
router.post('/', function(req, res, next){
  const animal = req.body.animal;
  Pet.create(animal)
    .then(function(result){
      res.json(result)
    })
    .catch(function(err){
      res.json(err)
    })
});

//Edit One Pet
router.post('/:id', function(req, res, next){
  Pet.findOneAndUpdate({_id: req.params.id}, req.body )
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    res.json(err)
  })
});

//Delete One Pet
router.post('/:id', function(req, res, next){
  Pet.deleteOne({_id: req.params.id})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    res.json(err)
  })
});

module.exports = router;
