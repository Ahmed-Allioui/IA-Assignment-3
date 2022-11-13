/**
 * Functions
 */

// we can simple define a function in this way
function hello(name) {
    return 'Hello '+name;
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

/**
 * Callbacks
 */

// A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.

function display(num){
    console.log('The sum is: '+num);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

// we pass display function as an argument to myCalculator function without giving it an argument 
myCalculator(1,2,display);

/**
 * async/await
 */

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

f().then();