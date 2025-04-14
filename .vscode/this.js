"use strict";

// 1. This in global space

console.log(this); 

// this in global space will represent the global object, which in case of browser is window and it can be different
//  for different javascript runtime environment

//2. this inside a function

function x(){
    console.log(this);
}
x();

//In strict mode the value of this inside a function will be undefined but in non strict mode due 
// to this substitution the value of this will be the global object.

//3. this value depends on how the function is called .

window.x(); // will give window object as output.

// 4. this inside objects method

const obj = {
    a: 10,
    b : function(){
        console.log(this);
        console.log(this.a);
    }
}
obj.b();
// the value of this keyword will be the object in which the method/function is present.

// 5. call, apply, bind methods

const student1 = {
    name : "Akanksha",
    p : function(){
        console.log(this.name);
    } 
};
const student2 = {
    name: "Priya"
};
student1.p();  // Akanksha
student1.p.call(student2); // priya --> inside the p method , the value of this will become student2

// 6. this inside an arrow function

const objec = {
    a: 20,
    y: () => {
        console.log(this);
    },
};
objec.y();
// as onjec is lexically encosed in the global scope than arrow function will behave this keyword is present inside 
// the global space and hence will return the global object.

// 7. this insidee nested arrow function.


const nes = {
    a: 30,
    n : function(){
        const m = () => {
            console.log(this);
        };
        m();
    },
};
nes.n();

// as this is present in an arrow function and this arrow function is lexically enclosed inside a objects method 
// than it will behave the same way as it would behave inside the objects method which is it will reprsent the object


// 8. this inside the DOM -- > check HTML button tag
// o/p = reference to the HTML element.
// this.tagName = Button(gives the tagname as output)
