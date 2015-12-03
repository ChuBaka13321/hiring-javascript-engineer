var fib = require('./fib'),
    memoize = require('./memoize'),
    fibMemoized = memoize(fib),
    benchmark = function (name, fn) {
        console.time(name);
        console.log(fn());
        console.timeEnd(name);
        console.log('----------------');
    };

//just to test multiple parameters
var sumAll = function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}

var sumMemoized = memoize(sumAll);

benchmark('fib(40)', function () {
    return fib(40);
});

benchmark('1st fibMemoized(40) execution', function () {
    return fibMemoized(10, 10000, 40);
});

benchmark('2nd fibMemoized(40) execution', function () {
    return fibMemoized(10000, 10000, 40);
});

benchmark('1st sumMemoized execution', function () {
    return sumMemoized(1, 3, 5);
});

benchmark('2nd sumMemoized execution', function () {
    return sumMemoized(1, 3, 5);
});

/*
// Warning:
// Without an optimization on `fib` or `memoize` any fibonacci operation above 40
// could hog your CPU
*/
