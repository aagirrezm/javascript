// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

/**
 * Example 1
 */
var x;
console.log(x === undefined); // true
x = 3;
 
/**
 * Example 2
 */
var myvar = "my value";
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();