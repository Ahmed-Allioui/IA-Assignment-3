/**
 * Functions tutorial
 */

// we can simple define a function in this way
function hello(name) {
    return 'Hello '+ name;
}

console.log(hello('Yahya!'))

// we can also pass a function to a constant
const x = function (a,b) {
  return a+b;
}
console.log(x(1,2))

// we can also pass a nameless function to a constant
const y = (a,b) =>{
    return a/b;
}
console.log(y(2,3))

// Higher-Order Function are function that take other functions as argument
// A famous example is the setTimout function that takes a function
// as 1st argument and a timout to be executed as a 2nd argument
setTimeout(function () {
    console.log('2000 milliseconds have passed since this demo started');
}, 2000);