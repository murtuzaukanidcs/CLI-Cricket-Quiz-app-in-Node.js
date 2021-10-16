/**
 * Reference: http://www.everythingforcity.com/quiz/sports-and-games-quiz/cricket-quiz.html
 */
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Cricket fans look here! Can you answer these 5 Questions?")
var name = "";
r1.question("Enter Your Name: ", (userName) => {
    name = userName;
    console.log("Welcome " + name + "\n");
    quiz();
});

var i = 0;
var score = 0;
const questions = [
    "Who has scored the most runs in a single First-class innings?",
    "'Dizzy' is the nickname of what Australian player?",
    "Who is the leading wicket taker in the history of Test cricket?",
    "When was the first cricket Test match played?",
    "Who was the first captain of Indian Test team?"
];
const options = [
    ["Sachin Tendulkar", "Brian Lara", "Virat Kohli", "Steve Smith"],
    ["Glenn McGrath", "Jason Gillespie", "Adam Gilchrist", "Brett Lee"],
    ["Courtney Walsh", "Brian Lara", "Muttiah Muralitharan", "Shane Warne"],
    ["1877", "1930", "1882", "1901"],
    ["Lala Amarnath", "Vijay Hazare", "C K Nayudu", "Vijay Merchant"]
];

var quiz = () => {
    if (i === 0) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + ") " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "2") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][3] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 1) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "2") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][1] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 2) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "4") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][2] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 3) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "1") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 4) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else {
        console.log("Final Score Of " + name + ": " + score + "/" + (questions.length * 5));
        r1.close();
    }
}