// var fib = function (n) {
//         if (n < 2) {
//             return n;
//         }
//         return fib(n - 1) + fib(n - 2);
        
//         //recursion, fib(5) --> return fib(4) + fib(3) --> then 4 and 3 would split into 3 & 2, and 2 & 1 respectively until the base case (n < 2) is reached. Recursion is fun, but not always the fastest implementation.
//     };
// module.exports = fib;

//reimplementation attempt
var fib = function (n) {
        var result;
        var smallIncrement = 1;
        var largeIncrement = 1;
        var i = 2;
        if (n <= 2) {
            return 1;
        }
        while(i < n) {
          result = largeIncrement + smallIncrement;
          smallIncrement = largeIncrement;
          largeIncrement = result;
          i++;
        }
        return result;
    };
module.exports = fib;
