#! usr/bin/cnv node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([{
        name: "Question_1",
        type: "list",
        message: chalk.green("1. What is TypeScript primarily used for?"),
        choices: ["A. Memory Management", "B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"]
    },
    {
        name: "Question_2",
        type: "list",
        message: chalk.green("2. Which of the following is NOT a valid TypeScript data type?"),
        choices: ["A. void", "B. any", "C. dynamic", "D. tuple"]
    },
    {
        name: "Question_3",
        type: "list",
        message: chalk.green("3. How do you denote a variable as readonly in TypeScript?"),
        choices: ["A. const", "B. static", "C. readonly", "D. fixed"]
    },
    { name: "Question_4",
        type: "list",
        message: chalk.green("4. How do you specify that a function does not return anything in TypeScript?"),
        choices: ["A. function myFunc(): undefined", "B. function myFunc(): void", "C. function myFunc(): null", "D. function myFunc(): None"]
    },
    { name: "Question_5",
        type: "list",
        message: chalk.green("5. How do you define a custom type in TypeScript?"),
        choices: ["A. interface", "B. typedef", "C. type", "D. Both A and C"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "C. Static Typing":
        console.log(chalk.blue("1) Correct Option"));
        ++score;
        break;
    default:
        console.log(chalk.red("1) Incorrect Option!!!"));
}
switch (quiz.Question_2) {
    case "C. dynamic":
        console.log(chalk.blue("2) Correct Option"));
        ++score;
        break;
    default:
        console.log(chalk.red("2) Incorrect Option!!!"));
}
switch (quiz.Question_3) {
    case "C. readonly":
        console.log(chalk.blue("3) Correct Option"));
        ++score;
        break;
    default:
        console.log(chalk.red("3) Incorrect Option!!!"));
}
switch (quiz.Question_4) {
    case "B. function myFunc(): void":
        console.log(chalk.blue("4) Correct Option"));
        ++score;
        break;
    default:
        console.log(chalk.red("4) Incorrect Option!!!"));
}
switch (quiz.Question_5) {
    case "D. Both A and C":
        console.log(chalk.blue("5) Correct Option"));
        ++score;
        break;
    default:
        console.log(chalk.red("5) Incorrect Option!!!"));
}
console.log(chalk.green.bold.underline("Your Score Is " + score));
