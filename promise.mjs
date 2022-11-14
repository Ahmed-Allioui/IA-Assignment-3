/**
 * Promise
 */

// Promise represents a value that is unknown for now but it will be known in the future (async value).

// In this example we create a Promise with a resolve and reject states
// if the promise is resolved meaning its fulfilled and the operation was completed successfully.
// else if the promise is rejected means that the operation failed
var party = new Promise((resolve, reject) => {
    if (thrown) {
        resolve('Party is thrown');
    } else {
        reject('Party was canceled')
    }
});

//The .then() method returns a promise of the actual state
// then we .catch catches the error if the promise is rejected
// lastly, finally is called when the promise is settled, whether fulfilled or rejected.
party
    .then(value => { 
    console.log(value);
    })
    .catch(error => { 
        console.log(error);
    })
    .finally(() => {
        console.log('Party was lit!');
    });