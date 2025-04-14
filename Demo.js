// setTimeout( function(){
//     console.log("Timer")
// },5000);

// function x(y){
//     console.log("X");
//     y()
// }
// x( function y(){
//     console.log("Y");
// })


// Concurrency model
// console.log("Start");

// setTimeout( function cb(){
//     console.log("Callback");
// }, 5000)

// console.log("End");

// // Studying concurrency model
// let startdate = new Date();
// let enddate = startdate;
// while (enddate < startdate + 10000){
//     enddate = new Date().getTime();
// }

// console.log("while expired")


//HIgher order function ft. functional programming 
// WAP to calculate area , circumference and diameter

// const radius=[2,3,4,1];

// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius){
//     return 2 * Math.PI * radius;
// }

// const diameter = function(radius){
//     return 2 * radius;
// }

// const calculate = function(radius , logic){
//     const output = [];
//     for(let i=0; i < radius.length ; i ++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

const arr = [1,5,3,4,6,7];
const output = arr.filter((x) => x% 2 ==0 );
console.log(output)

c