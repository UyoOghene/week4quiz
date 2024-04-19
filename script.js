// present Score (if i clkick on the correct button increase by 1)
// TimeR (if timer is up , let the correct class turn green) and a h1 displays times up
// question no (random selection when next question button is clickd)
// question 
// 4buttons options with a class  that one onclick will be correct
// next question button that onclick changes the question and adds to present score

let score = 0;
let currentQuestionIndex = 0;
const start = document.getElementById('start');
const answerButtons = document.getElementById('answer-buttons');
const question = document.getElementById('question');
const questionnum = document.querySelector('.question-num')
const next = document.getElementById('next');
const presentScore= document.getElementById('presentScore');
const timer = document.querySelector('.timer');
const musictxt = document.querySelector('#musictxt');
const music = document.querySelector('.music');
const song1 = document.querySelector('#one');



const questions =[
    {
        question:"Which of these is not a starter pokemon?",
        answers: [
            {text: 'torchic', correct: false},
            {text: 'cyndaquil', correct: false},
            {text: 'golem', correct: true},
            {text: 'totodile', correct: false},
        ]
    },
    {
        question:"Which of these has psychic abilities?",
        answers: [
            {text: 'scyther', correct: false},
            {text: 'houndoom', correct: false},
            {text: 'exeggutor', correct: true},
            {text: 'ivysaur', correct: false},
        ]
    },
    {
        question:"Which of these is in its most evolved version?",
        answers: [
            {text: 'bellosom', correct: true},
            {text: 'nidorina', correct: false},
            {text: 'golbat', correct: false},
            {text: 'poliwhirl', correct: false},
        ]
    },
    {
        question:"Which of these moves is supereffective against a water pokemon?",
        answers: [
            {text: 'giga drain', correct: true},
            {text: 'seismic toss', correct: false},
            {text: 'horn attack', correct: false},
            {text: 'dreameater', correct: false},
        ]
    },
    {
        question:"Which of these pokemon does not evolve?",
        answers: [
            {text: 'kabuto', correct: false},
            {text: 'dragonair', correct: false},
            {text: 'tropius', correct: true},
            {text: 'sentret', correct: false},
        ]
    },
    {
        question:"Which of these do i use to increase the level of the pokemon?",
        answers: [
            {text: 'red shard', correct: false},
            {text: 'black glasses', correct: false},
            {text: 'moon stone', correct: false },
            {text: 'rare candy', correct: true},
        ]
    },
    {
        question:"Which of these gym leaders specialize in grass type?",
        answers: [
            {text: 'lt surge', correct: false},
            {text: 'misty', correct: false},
            {text: 'erika', correct: true},
            {text: 'koga', correct: false},
        ]
    },
    {
        question:"Which of these pokemon has a weakness for pschic moves?",
        answers: [
            {text: 'jynx', correct: false},
            {text: 'tyrogue', correct: true},
            {text: 'starmie', correct: false},
            {text: 'bellsprout', correct: false},
        ]
    },
    {
        question:"Which pokemon is eevee's psychic evolution?",
        answers: [
            {text: 'umbreon', correct: false},
            {text: 'flareon', correct: false},
            {text: 'espeon', correct: true},
            {text: 'glaceon', correct: false},
        ]
    },
    {
        question:"Which of these moves is supereffective against jynx?",
        answers: [
            {text: 'earthquake', correct: false},
            {text: 'water gun', correct: false},
            {text: 'hyper fang', correct: false},
            {text: 'bite', correct: true},
        ]
    }
]
// function time(){

//     timer.innerHTML= 'oops! Times up';
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === 'true'){
//             button.classList.add('correct');
//         }
//         button.disabled = true;
//     }); 
//     next.style.display = 'block';

// }
let countdown = 15; // Set the initial countdown time

function time() {
    timer.innerHTML = 'Time left:' +countdown + 's' ; // Display the countdown
    countdown--; // Decrement the countdown

    if (countdown < 0) {
        timer.innerHTML = 'Oops! Time\'s up'; // Display "Time's up" when countdown reaches 0
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        next.style.display = 'block';
    } else {
        setTimeout(time, 1000); // Call the time() function recursively every second
    }
}

function startQuiz() {
    countdown = 15; // Reset the countdown timer
    time(); // Start the countdown timer
    currentQuestionIndex = 0;
    score = 0;
    presentScore.innerHTML = 0;
    questions.sort(() => Math.random() - 0.5);
    const selectedQuestions = questions.slice(0, 5);
    questions.splice(0, questions.length, ...selectedQuestions);
    next.innerHTML = 'Next';
    showQuestion();
}
    


// function startQuiz(){
//     setTimeout(time, 8000)

//     currentQuestionIndex = 0 ;
//     score = 0 ;
//     presentScore.innerHTML=0;
    
//     next.innerHTML = 'next';
//     showQuestion();
// }

function showQuestion(){
    resetState();
    countdown = 15;
    time();

let currentQuestion =questions[currentQuestionIndex];
let questionNo = currentQuestionIndex +1;
questionnum.innerHTML ='Question' + ' ' + questionNo + ' ' + 'out of 5 shuffled from 10';
question.innerHTML =questionNo +'. '+ currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct =answer.correct;
    }
    button.addEventListener('click',selectAnswer);
    
});
next.style.display = 'none';

}


function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    }); 
    next.style.display = 'block';
}

function showScore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML ='play again';
    next.style.display='block';
}

function handleNxtbtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        countdown = 15;
        time(); // Start the countdown timer for the next question
        showQuestion();
    } else {
        showScore();
    }
}

next.addEventListener('click', () => {

    timer.innerHTML = '';
    time();
    presentScore.innerHTML = score;
    if (currentQuestionIndex < questions.length) {
        handleNxtbtn();
        time();

    } else {
        startQuiz();
    }
});

startQuiz();

musictxt.addEventListener('click',change)
function change(){
    console.log('change');
    song1.style.display = 'none'
    song1.pause();
    let song2 = document.createElement("AUDIO");
    song2.setAttribute("src","/music/Crayon-feat-Ayra-Starr-Ngozi.mp3");
    song2.setAttribute("controls", "controls");
    music.appendChild(song2);
  }
