//console.log("Hello");
let directions = document.querySelector('.directions')
let start = document.querySelector('.start');
let questions = document.querySelectorAll('.q');
let tryAgain = questions[questions.length - 1];
let result = document.querySelector('.result');
let score = 0;
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
}

document.querySelectorAll('.selection').forEach(choices => {
    choices.addEventListener('click', runTrivia)
  })

document.querySelectorAll('.correct').forEach(correct => {
    correct.addEventListener('click', scoreTally)
})

let restart = document.querySelectorAll('.restart');
restart[0].addEventListener('click', restartTrivia);

function scoreTally() {
    score ++;
    //console.log("Tally " + score);
    
    if (score === 10) {
        result.textContent = "Congratulations!!!  You got all ten questions correct!  Score: 100%";
    }
    else if (score === 9) {
        result.textContent = "Great Job!  You got nine out of ten questions correct!  Score: 90%";
    }
    else if (score === 8 || score === 7) {
        result.textContent = "Not bad!  You got seven to eight questions correct. Score: 70-80%";
    }
    else {
        result.textContent = "Looks like you could sharpen your animal knowledge!  You got less than seven questions correct. Score: <= 60%";
    };
}
  

//Display score results and offer player to restart trivia game
function restartTrivia () {
    //console.log("reset score" + score);
    //console.log("reset qIndex" + currentQIndex);
    tryAgain.style.display = 'none';
    currentQIndex = 0;
    previousQIndex = -1;
    score = 0;
    runTrivia();
   
}