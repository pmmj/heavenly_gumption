var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
    name: String,
    attack_type: String,
    attribute: String
});

var Hero = mongoose.model("Hero", itemSchema);

module.exports = Hero;