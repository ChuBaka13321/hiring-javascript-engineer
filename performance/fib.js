// var fib = function (n) {
//         if (n < 2) {
//             return n;
//         }
//         return fib(n - 1) + fib(n - 2);
//     };
// module.exports = fib;

// var fib = function (n) {
//   //cache up here
//   //subroutine function here
//         if (n < 2) {
//             return n;
//         }
//         return fib(n - 1) + fib(n - 2);
//     };

//2nd reimplementation attempt with cache and recursion
var fib = function(x) {
  var fibCache = {};
  //Object where the key/values are stored and accessed to save on time/efficiency
  var subRoutine = function(n, cache) {
    if(!cache[n]) {
    //check if cache[n] exists, if it doesn't exist, proceed with following
      if (n < 2) {
        cache[n] = n;
        //base case of 0 or 1;
      } else {
        cache[n] = subRoutine(n-1, cache) + subRoutine(n-2, cache);
        //numbers 2 & greater get defined here, with subsequent recursive calls. each subRoutine returns their value after each recursion reaches base case.
      }
    }
    return cache[n];
    //return the final value/total here
  };
  return subRoutine(x, fibCache)  
  //pass fibCache object as secondary parameter to save on execution of subRoutine
}


module.exports = fib;

// //reimplementation attempt
// var fib = function (n) {
//         var result;
//         var smallIncrement = 1;
//         var largeIncrement = 1;
//         var i = 2;
//         if (n <= 2) {
//             return n;
//         }
//         while(i < n) {
//           result = largeIncrement + smallIncrement;
//           smallIncrement = largeIncrement;
//           largeIncrement = result;
//           i++;
//         }
//         return result;
//     };
// module.exports = fib;


