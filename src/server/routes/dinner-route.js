var mongoose = require('mongoose');
var express = require('express')
var router = express.Router();
var Dinner =  require('../models/dinner');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
router.use(allowCrossDomain);


router.get('/', function(req,res){
    Dinner.find({}, function(err,docs){
        if(!docs)
            return;
        res.json(docs);
    })
});

router.post('/updateWeekDinner', function(req,res){
  var body = req.body;
  var week = body.week;
  var dinner = new Dinner();
    if (body === undefined) {
        res.send('There was a error. There are too many # of days');
        return;
    } else {
        //replace the current week with the new week
        dinner.Day = body.Day;
        dinner.Meal = body.Meal
        Dinner.findOne({Day:dinner.Day}, function(err,docs){
            if(docs) {
                docs.Meal = dinner.Meal;
                docs.save(function(err){
                    if(!err){
                        res.send('OK')
                    } else {
                        res.status(500).send('Error');
                    }
                });
            } else {
                dinner.save(function(err){
                    if(err)
                        res.status(500).send('Error')
                    else
                        res.send('OK');
                })
            }
               
        })
        
    }
});

module.exports = router; 