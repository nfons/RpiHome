var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/* I dont think this is a good DB schema...but i am too lazy to comr up with it */

var DinnerSchema = new Schema({
   Day: String,
   Meal: String
  });

module.exports = mongoose.model('Dinner', DinnerSchema);