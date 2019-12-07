var Item = require('../models/item');
var fs = require('fs');

function loadData(file, callback) {
    var items;
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        items = JSON.parse(data);
        // var items = itemsFile.items;
        var models = Promise.all(items.map(makeItemModel))
            .then( () => {
                callback(null, data);
            })
            .catch( err => {
                console.log("Error loading data: " + err);
                callback(err);
            })
    });
}

function makeItemModel(item) {
    Item.findOne({name: item.name}, function(err, result) {
        if (err) {
            console.log("Error finding item:" + err);
            return err;
        }
        if (result) {
            console.log("Item %s exists!", item.name);
            return result;
        }
        var newItem = new Item();
        newItem.name = item.name;
        newItem.cost = item.cost;
        newItem.type = item.type;
        newItem.save(function(err, result) {
            if (err) {
                console.log("Error saving to database: " + err);
                return;
            }
            console.log("Saved %s to database!", result.name);
        });
        return newItem;
    });
}

module.exports = {
    loadData: loadData,
    makeItemModel: makeItemModel
};