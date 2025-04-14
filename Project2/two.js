

// function to generate random value

const randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let interval;

const getRandomColor = function(){
    if(interval == null){
        interval = setInterval(changebg, 1000);
    }
    

    function changebg(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopinterval = function(){
    clearInterval(interval);
    interval = null;
};

document.querySelector("#start").addEventListener('click',getRandomColor);
document.querySelector("#stop").addEventListener('click', stopinterval);
