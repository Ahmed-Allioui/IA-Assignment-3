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