var mongoose = require('mongoose');
var express = require('express')
var router = express.Router();
var Dinner =  require('../models/dinner');

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
            if(docs)
               docs.remove();
        })
        dinner.save(function(err){
            if(err)
                res.send('error' +err);
            else
                res.send('OK');
        });
        
    }
});

module.exports = router; 