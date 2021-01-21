console.log("Hello");
let directions = document.querySelector('.directions')
let start = document.querySelector('.start');
let question = document.querySelectorAll('.q');

let currentQIndex = 0

start.addEventListener('click', startTrivia)

function startTrivia(){
    question[currentQIndex].style.display = 'block';
    console.log('current', question[currentQIndex]);
    directions.style.display= 'none';
}

document.querySelectorAll('.selection').forEach(choices => {
    choices.addEventListener('click', answerSelection)
  })

function answerSelection (event) {
    console.log('Hi');
}