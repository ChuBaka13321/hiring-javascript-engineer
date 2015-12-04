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
};

var sumMemoized = memoize(sumAll);

var paramsTest = function (a,b,c,d,e) {
        return [a,b,c,d,e].join(' - ');
    },
    paramsTestMemo = memoize(paramsTest);

benchmark('paramsTest: 5, 4, 3, 2, 1', function () {
    return paramsTest(5, 4, 3, 2, 1);
});

benchmark('paramsTestMemo: 5, 4, 3, 2, 1', function () {
    return paramsTestMemo(5, 4, 3, 2, 1);
});


benchmark('fib(40)', function () {
    return fib(7);
});

// benchmark('1st fibMemoized(1000) execution', function () {
//     return fibMemoized(40000000);
// });

// benchmark('2nd fibMemoized(1000) execution', function () {
//     return fibMemoized(40);
// });

// benchmark('1st sumMemoized execution', function () {
//     return sumMemoized(1, 3, 5);
// });

// benchmark('2nd sumMemoized execution', function () {
//     return sumMemoized(1, 3, 5);
// });

/*
// Warning:
// Without an optimization on `fib` or `memoize` any fibonacci operation above 40
// could hog your CPU
*/
