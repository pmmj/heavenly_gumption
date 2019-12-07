var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    name: String,
    type: String,
    cost: Number,
	attribute: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;