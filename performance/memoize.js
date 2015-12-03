// var results = {};
// // The object where the key/values are stored after being run to save on memory. Instead of running the fib recursion function again, ideally we want to store the values, so if we've already done fibMemoized(40) once. We bypass redoing the function and just access it via the key/value from results object and return that.

// module.exports = function (fn) {
//     //fn represents the function fib() being passed in as a parameter to memoize(fn).

//     return function (param) {
//         //function here has access to "results" variable outside of its scope and is able to return the value or create new key/value pair.
//         //param in this case is "40" or the numbers being passed into fibMemoized(param);
//         return results[param] || (results[param] = fn.call(this, param));
//         //returns results[param] if exists, otherwise results[param] is now set to the result of fn() being called on the parameter being passed in, and is then returned.
//     };
// };


// Multiple parameters, like, lets suppose you want to change fib to sumAll, and sumAll accepts N params, sumAll(1,2,3) = 6, sumAll(5,1,0) = 6 too.
//note to self: try sorting params as they come in to get the same order. ex: (4,5) & (5,4) --> (4,5) & (4,5)

var results = {};


module.exports = function (fn) {

    return function () {
        var argArray = [];
        for (var i = 0; i < arguments.length; i++) {
          argArray.push(arguments[i])
        };
        argArray.sort()
        if(!(argArray.toString() in results)) {
          results[argArray.toString()] = fn.apply(this, argArray)
        }
        return results[argArray.toString()]

    };
};
