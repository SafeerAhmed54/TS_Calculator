//Importing Module from the inquirer
import inquirer from "inquirer";
// Taking input from the user
// 1.) Computer will Generate a random number
// 2.) Take number from the user to guess the number
// 3.) User number and Computer number comparision
// Random Number Generation
const randNumber = Math.floor(Math.random() * 10 + 1);
console.log(randNumber);
// Taking Input from the user
const answers = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "I have a number Let me know if you know it : "
    }
]);
// // Comparing Condition for the Computer number vs User input
if (answers.userNumber == randNumber) {
    console.log(`Congrats! you have guessed right. Number which is ${answers.userNumber}`);
}
else {
    console.log(`Sorry! your guess is wrong. Number is ${answers.userNumber}`);
}
