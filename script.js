//console.log("Hello");
let directions = document.querySelector('.directions')
let start = document.querySelector('.start');
let questions = document.querySelectorAll('.q');

let currentQIndex = 0;
let previousQIndex = -1;

start.addEventListener('click', runTrivia)

function runTrivia() {
    directions.style.display= 'none';
    questions[currentQIndex].style.display = 'block';
    if(previousQIndex > -1) {
    questions[previousQIndex].style.display = 'none'
    }
    currentQIndex ++;
    previousQIndex ++;
    
    //console.log('current', questions[currentQIndex]);   
}

document.querySelectorAll('.selection').forEach(choices => {
    choices.addEventListener('click', runTrivia)
  })

document.querySelectorAll('.correct').forEach(correct => {
    correct.addEventListener('click', scoreTally)
})

let restart = document.querySelectorAll('.restart');
restart[0].addEventListener('click', restartTrivia);

//Logging each correct answer
let score = 0

function scoreTally() {
score = score ++;
console.log(score);
}

//Display score results and offer player to restart trivia game
function restartTrivia () {
    if (score === 10) {
        alert("Congratulations!!!  You got all ten questions correct!  Score: 100%");
    }
    else if (score === 9) {
        alert("Great Job!  You got nine out of ten questions correct!  Score: 90%");
    }
    else if (score === 8 || score === 7) {
        alert('Not bad!  You got seven to eight questions correct. Score: 70-80%')
    }
    else {
        alert('Looks like you could sharpen your animal knowledge!  You got less than seven questions correct. Score: <= 60%')
    }
    currentQIndex = 0;
    previousQIndex = -1;
    score = 0;
   
}