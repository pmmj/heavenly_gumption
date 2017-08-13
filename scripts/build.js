var Item = require("../models/item");

function generateBuild(options, callback) {
    /*
     * options = {
     *     maxCost: Number?,
     *     minCost: Number?,
     *     numberOfItems: Number?
     *     repeatItems: Boolean?
     * }
     */

    var maxCost = options.maxCost || null;
    var minCost = options.minCost || null;
    var numberOfItems = options.numberOfItems || 6;
    var repeatItems = options.numberOfItems || false;
    (arr = []).length = numberOfItems - 1;
    arr.fill(0);
    var boot = new Promise(function(resolve, reject) {
            Item.aggregate().append([
                {
                    $match: {
                        type: "boot"
                    }
                },
                {
                    $sample: {
                        size: 1
                    }
                }
            ])
                .then( data => {
                    resolve(data[0].name);
                })
                .catch( err => {
                    reject(err);
                });
        });
    var items = arr.reduce( acc => {
        var p = new Promise(function(resolve, reject) {
            Item.aggregate().append([
                {
                    $match: {
                        type: {$ne: "boot"}
                    }
                },
                {
                    $sample: {
                        size: 1
                    }
                }
            ])
                .then( data => {
                    resolve(data[0].name);
                })
                .catch( err => {
                    reject(err);
                });
        });
        return [...acc, p];
    }, [boot]);

    Promise.all(items)
        .then( values => {
            resolveDuplicates(values, callback);
        })
        .catch( err => {
            callback(err);
        });
}

function resolveDuplicates(arr, callback) {
    var size = (new Set(arr)).size;
    //console.log(size);
    var hasDuplicates = (size !== arr.length);
    if (!hasDuplicates) {
        callback(null, arr);
        return;
    }
    var setArray = [...new Set(arr)];
    (timesToMap = []).length = arr.length - size;
    timesToMap.fill(0);
    var timesArray = timesToMap.reduce( acc => {
        var p = new Promise(function(resolve, reject) {
            Item.aggregate().append([
                {
                    $match: {
                        type: {$nin: setArray}
                    }
                },
                {
                    $sample: {
                        size: 1
                    }
                }
            ])
                .then( data => {
                    resolve(data[0].name);
                })
                .catch( err => {
                    reject(err);
                });
        });
        return [...acc, p];
    }, []);
    Promise.all(timesArray)
        .then( values => {
            resolveDuplicates([...setArray, ...values], callback);
        })
        .catch( err => {
            callback(err);
        });
}

module.exports = {
    generateBuild: generateBuild
};