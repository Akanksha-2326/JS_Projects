// const p = new Promise((resolve, reject) => {
//     resolve("Promise is resolved");
// });

// async function getdata() {
//     return p;
// }

// const data  =   getdata();
// data.then((res) => console.log(res));

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P1 resolved");
    }, 5000);
})

// async function getdata() {
//     p1.then((res) => console.log(res) );
//     console.log("Namaste javascript");
// }
// getdata();

//  ===>>> now similar code using async await | below

// async function handlep1(){
//     console.log("Hello")
//     const val = await p1;
//     console.log("Namaste JS");// after 10 sec it will be executed along with the promise resolution
//     console.log(val);
// }
// handlep1();

//  ===>>> what happens when await is used twiced on the same promise?


// async function handlep1(){
//     console.log("Hello")
//     const val1 = await p1;
//     console.log("Namaste JS 1");// after 10 sec it will be executed along with the promise resolution
//     console.log(val1);

//     const val2 = await p1;
//     console.log("Namaste JS 2");
//     console.log(val2);
// }
// handlep1() // op - val1 and val2 both will be executed in 10 sec as p1 is called first time it took 10 sec
//  to resolve and has a value so if we call it next time it is already resolve and exa=ecutes quickly.


//  ==== >>>In case of two differnt promise 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("P2 is resolved");
//     }, 10000);
// })

// // const p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve("P2 resolved"));
// // }, 10000);

// async function handlepromise() 
// {
//     console.log("hello");
//     const val1 = await p1;
//     console.log("Namaste 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("namaste 2");
//     console.log(val2);
    
// }
// handlepromise();

// ===>>> examples of async await using fetch

const API_URL = "https://api.github.com/users/akshaymarch7";

async function handleP(){
    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);
    
}
handleP().catch((err) => console.log(err));