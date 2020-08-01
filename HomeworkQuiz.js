// variable for questions with posible answers
// on answer has to be right
//JSON = javascript object notation

var questions = [{
        q: "Which coding platform establishes the structure of a web page?",
        a1: "JavaScript",
        a2: "HTML",
        a3: "CSS",
        correct: "HTML"
    },
    {
        q: "Who is the dynamic leader of the technology company, Tesla?",
        a1: "Bill Gates",
        a2: "Steve Jobs",
        a3: "Elon Musk",
        correct: "Elon Musk"
    },
    {
        q: "Which tag signifies a new section of the web page",
        a1: "<div>",
        a2: "$",
        a3: "var",
        correct: "<div>"
    },
];
var counter = 60;
var questionIndex = 0;

var timer;

var button = document.getElementById("start");
var timerUI = document.getElementById("timer");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var score = document.getElementById("score");
var buttonsubmit = document.getElementById("submit");
buttonsubmit.addEventListener("click", storescore);
button.addEventListener("click", startQuestions);
answer1.addEventListener("click", compareAnswer);
answer2.addEventListener("click", compareAnswer);
answer3.addEventListener("click", compareAnswer);

function storescore() {

}

function startQuestions() {
    switchQuestion();

    timer = setInterval(askQuestion, 1000);
}

function askQuestion() {
    counter--;
    timerUI.innerText = counter;

}

function switchQuestion() {
    questions[questionIndex];
    question.innerText = questions[questionIndex].q;
    answer1.innerText = questions[questionIndex].a1;
    answer2.innerText = questions[questionIndex].a2;
    answer3.innerText = questions[questionIndex].a3;

}

function compareAnswer() {
    var pressAnswer = event.target.innerText;
    console.log(pressAnswer);
    if (pressAnswer !== questions[questionIndex].correct) {
        counter -= 5;

    }

    questionIndex += 1;
    if ((questionIndex < questions.length) && (counter > 0)) {
        switchQuestion();

    } else {
        clearInterval(timer);
        score.innerText = counter;
    }
}