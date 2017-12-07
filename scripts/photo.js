var jimp = require("jimp");
var async = require('async')

function composePhoto(arr, callback) {
    var photoNames = arr.map(photoName => {
        var photoPromise = new Promise( (resolve, reject) => {
            jimp.read("images/items/" + photoName + "_lg.png")
                .then(photo => {
                    resolve(photo);
                })
                .catch(err => {
                    console.log("Error loading photo: " + err);
                });
        });
        return photoPromise;
    });

    Promise.all(photoNames)
        .then(photos => {
            buildPhoto = new jimp(84 * (photos.length), 64, 0x11111111, function (err, b) {
                ap = photos.map(function(item, index) {
                    return {i: index, photo: item};
                });
                async.map(ap, function(p, next) {
                    b.composite(photos[p.i], 84 * p.i, 0, function(err, image) {
                        next(null, image);
                    });
                }, function(err, result) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    b.getBuffer(jimp.MIME_PNG, function(err, buf){
                        callback(null, buf);
                    });
                });
            });
        })
        .catch( err => {
            console.log("Error passing photos: "+ err);
        });
}

module.exports = {
    composePhoto: composePhoto
}