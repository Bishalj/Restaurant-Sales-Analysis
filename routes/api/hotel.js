var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Hotels = mongoose.model('Hotels');

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.setHeader('Content-Type', 'application/json');
  res.render('index', { title: 'Hotel' });
});

router.post("/create", function(req, res, next){
    //res.setHeader('Content-Type', 'application/json');
    var hotels = new Hotels(req.body);
    hotels.save().then(function(data){
           return res.send({"data":data, "message":"Successfull"});
    }).catch(error => {
        console.log(error);
        return res.json({"message":"Failed"});
    });
});

router.get("/getById/:id", function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    Hotels.findOne({_id :req.params.id}).then( data => {
        res.json({"data":data});
    }).catch(error => {
        return res.json({"message":"Failed"});
    });
});

router.get("/get_restaurant_by_email/:email", function(req, res, next){
   Hotels.find({email: req.params.email}).then( data => {
        res.json({"data":data});
    }).catch(error => {
        return res.json({"message":"Failed"});
    });
});

module.exports = router;