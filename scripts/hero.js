var Hero = require("../models/hero");

function generateHero(options, callback) {
    /*
     * options = {
     *     maxCost: Number?,
     *     minCost: Number?,
     *     numberOfItems: Number?
     *     repeatItems: Boolean?
     * }
     */

    var numberOfItems = options.numberOfItems || 1;
    var repeatItems = options.numberOfItems || false;
    (arr = []).length = numberOfItems - 1;
    arr.fill(0);
    var hero = new Promise(function(resolve, reject) {
            Hero.aggregate().append([
                {
                    $match: {
                        Name: {$ne:"boot"}
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
    generateHero: generateHero
};
