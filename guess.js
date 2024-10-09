const prompt = require("prompt-sync")({signint:true});
const targetNumber = Math.floor(Math.random()*10)+1;
let guess = null;
const promptUser = ()=> {
    guess = parseInt(prompt("Guess a number between 1 and 10: "),10);
};
while(guess !== targetNumber){
    promptUser();
    if(guess<targetNumber){
        console.log("Too low!");
    }else if (guess>targetNumber){
        console.log("Too high!");
    }else{
        console.log("Correct!")
    }
}