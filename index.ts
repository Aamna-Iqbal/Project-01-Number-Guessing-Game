#!usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*20 + 1);
const answer = await inquirer.prompt([
{
    name:"userGuessNumber",
    type:"number",
    message:"Enter your guess Number (Number list from 1 to 20)"

}
]);
if (answer.userGuessNumber === randomNumber){
    console.log("congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}
