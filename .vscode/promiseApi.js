// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is Successful"),3000);
// });

// p1 = 2 ways to write a promise 

const p1 = new Promise((function(resolve,reject){
    setTimeout(function(){
        resolve("p1 is Successful");
    },3000);
}))

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 is Successful"), 1000);
    setTimeout(() => reject("P2 is failed"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p3 is Successful"), 2000);
    setTimeout(() => reject("p3 is failed"), 2000);
});


// Promise.all([p1,p2,p3]).then((res) => console.log(res))
// .catch((err) => console.error(err));

// Promise.allSettled([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// Promise.race([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

Promise.any([p1,p2,p3])
.then((res) => console.log(res))
.catch((err) => console.error(err));


//1st case when all are success
// when p2 fails, we got an uncaught error so , we need to use .catch to get a caught error and print it using console.error to show the error in red color
