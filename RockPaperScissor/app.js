let userScore=0;
let computerScore=0;

const selectSound=new Audio('Music/select.mp3');

const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','p','s'];
    //It will never go to 3 it willl be in btw 0,1,2
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];

}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

function Wins(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    
    result_p.innerHTML=`${convertToWord(userChoice)} i.e User beats ${convertToWord(computerChoice)} i.e computer ,You Wins!!`;
    
}

function Lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore; 

    result_p.innerHTML=`${convertToWord(computerChoice)} i.e computer beats ${convertToWord(userChoice)} i.e user ,Computer Wins!!`;

}

function Draw(userChoice,computerChoice){
    result_p.innerHTML=`Its a draw btw ${convertToWord(userChoice)} i.e user and ${convertToWord(computerChoice)} i.e computer`;
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            Wins(userChoice,computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            Lose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            Draw(userChoice,computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function () {
        game("r");
        selectSound.play();
    })

    paper_div.addEventListener('click', function () {
        game("p");
        selectSound.play();
    })

    scissors_div.addEventListener('click', function () {
        game("s");
        selectSound.play();
    })
}
main();