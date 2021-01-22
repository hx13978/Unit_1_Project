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

let score = 0

function scoreTally() {
score = score ++;
console.log(score);
}

let restart = document.querySelector('.restart')
restart.addEventListener('click', runTrivia);

