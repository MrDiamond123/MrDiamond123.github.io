
var max;
var min;

var dmax = 6;
var dmin = 0;

var digit1; //1st digit
var digit2; //2nd digit
var problem; 

var getAnswer;
var userAnswer;
var readableOperation;
var stringedAnswer;

var wrongAnswer = "Sorry, your answer was wrong.";
var rightAnswer = "Congrats, your answer was right!";
var questionText = " ";

var input = document.getElementById("htmlAnswer");
var answerThing = document.getElementById("answerThing");

var amountRight = 0;
var amountRightDisplay = document.getElementById("amountRight");
var amountRightText = "Correct Answers: ";

var correctStreak = 0;
var correctStreakDisplay = document.getElementById("correctStreak");
var correctStreakText = "Current Streak: ";

//SETUP

function getReadableOperation (problem) {
if (problem == 1) {
    return " + ";
 } else if (problem == 2) {
    return " - ";
 } else if (problem == 3) {
    return " * ";
 } else if (problem == 4) {
    return " / ";
 } else {
    console.log("ERROR: INVALID PROBLEM (getReadableOperation)");
 }
}

function getProblem(){
  return problem;  
}


function getAnswer(digit1, digit2, problem) {
         if (problem == 1) { return digit1 + digit2; }
    else if (problem == 2) { return digit1 - digit2; }
    else if (problem == 3) { return digit1 * digit2; }
    else if (problem == 4) { return digit1 / digit2; }
    else                   { return 0; }
}

function resetText() {  
  document.getElementById("htmlQuestion").innerHTML = "What is " + digit1 + " " + getReadableOperation(problem) + digit2 + "?";
}

function setProblem() {
  digit1 = Math.floor(Math.random() * (max - min + 1) ) + min;
  digit2 = Math.floor(Math.random() * (max - min + 1) ) + min;
  problem = Math.floor(Math.random() * 3) + 1;
  questionText = "What is " + digit1 + getReadableOperation(problem) + digit2 + "?";
  return 0;
}


function getQuestionText() {
    var questionText = "What is " + digit1 + getReadableOperation(problem) + digit2 + "?";
    return questionText;
}


function confirmAnswer() {
    stringedAnswer = getAnswer(digit1, digit2, problem).toString();
    if (userAnswer == stringedAnswer) {
        console.log("ANSWER: CORRECT");
        return 1;
    } else {
        console.log("ANSWER: WRONG")
        return 0;
    }
}
 
function displayAnswerThing(boolean) {
  if (boolean) {
   answerThing.innerHTML = rightAnswer; 
   answerThing.style.color = "green";
  } else {
   answerThing.innerHTML = wrongAnswer; 
   answerThing.style.color = "red";
  }
}

function displayCorrectRight() {
    amountRightDisplay.innerHTML = amountRightText + amountRight;
}
function displayCorrectStreak() {
    correctStreakDisplay.innerHTML = correctStreakText + correctStreak;   
}    


function confirmGenProblem() {
    userAnswer = Number(input.value);
 if (confirmAnswer()) {
     //Reset The Problem
     setProblem();
     
     //Change to the new problem
     document.getElementById("htmlQuestion").innerHTML = questionText;
     
     //Reset old answer
     userAnswer = 0;
     input.value = ' ';
     
     //Tell user that the answer was correct
     displayAnswerThing(true);
     
     //Change the amount right counter
     amountRight = amountRight + 1;
     
     //Change the correct streak counter
     correctStreak = correctStreak + 1;
     
     //Display amount right and correct streak
     displayCorrectRight();
     displayCorrectStreak();
     return 1;
 } else {
     displayAnswerThing(false);
     correctStreak = 0;
     displayCorrectStreak();
     return 0;
 }
 
}
 



function askProblem() {
    getQuestionText();
    userAnswer = prompt("What is" + digit1 + getReadableOperation(problem) + digit2 + "?");
    if (confirmAnswer()) {
        alert(rightAnswer);
        return 1;
    } else {
        alert(wrongAnswer);
        return 0;
    }
}    


function alertProblem() {
  setProblem();
  askProblem();
}

function resetSettings () {
 max = dmax;
 min = dmin;
    
 document.getElementById("maxProblem").value = dmax;
 document.getElementById("minProblem").value = dmin;
   
 correctStreak = 0;
 amountRight = 0;
  
 setProblem();
 document.getElementById("htmlQuestion").innerHTML = questionText;

}

function changeSettings () {
    max = Number(document.getElementById("maxProblem").value);
    min = Number(document.getElementById("minProblem").value);
    correctStreak = 0;
    amountRight = 0;
    setProblem();
    document.getElementById("htmlQuestion").innerHTML = questionText;
}


resetSettings();
setProblem();
document.getElementById("htmlQuestion").innerHTML = questionText;
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    confirmGenProblem();
  }
});

// Add code to enable cheat bu†ton by clicking the title
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.title')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);
}, false);
