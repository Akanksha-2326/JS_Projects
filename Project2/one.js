const a = document.getElementById('start');
const b = document.getElementById('stop');

const sayDate = function(){
    console.log("Akanksha", Date.now());
}
let interval ;

a.addEventListener('click', function(){
    interval = setInterval(sayDate, 2000);
    console.log("Start");
});

const stop = function(){
    clearInterval(interval);
    console.log("stopped");
}

b.addEventListener('click', stop);
