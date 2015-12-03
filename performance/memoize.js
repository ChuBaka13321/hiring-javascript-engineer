var results = {};
// The object where the key/values are stored after being run to save on memory. Instead of running the fib recursion function again, ideally we want to store the values, so if we've already done fibMemoized(40) once. We bypass redoing the function and just access it via the key/value from results object and return that.

module.exports = function (fn) {
    //fn represents the function fib() being passed in as a parameter.

    return function (param) {
        //function here has access to "results" variable outside of its scope and is able to return the value or create new key/value pair.
        //param in this case is "40" or the numbers being passed into fibMemoized(param);
        return results[param] || (results[param] = fn.call(this, param));
    };
};
