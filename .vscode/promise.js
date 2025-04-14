const cart = ["jeans", "tops", " kurta","shoes"];

const promise = createOrder(cart);
// console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
    return orderId;
    //proceed to payment.
})
.then(function(orderId){
    return proceedToPayment(orderId); // returning complete proceedToPayment because we need to pass its o/p to print the payment info
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message); // catchs any error of the objects above catch in the chain.
})

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("The cart is not valid");
            reject(err);
        }
        //
        const orderId = "4567";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
            
        }
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successfull");
    })
}

function validateCart(cart){
    return true;
}



// o/p = after 5sec the creat order gets value of order ID when resolved and promise chain gets the value and 1st prints the orderID futher we return the order id to 
// the next elememt in chain . so, this proceed to paymnet takes the order id and creates a promise and resolve it with a message on console.
//further we return this proceedtopaymnet down the chain and it prints the payment info.