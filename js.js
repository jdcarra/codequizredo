/* Start Quiz code tutor help*/

/* Timer variables */
var score= document.querySelector("#score");
var time= document.querySelector(".timer");
var secLeft = 80;
/* button*/
const Start = document.querySelector("#start");


/* start quiz variable*/
const begin = document.querySelector("#quiz-section");

/* load hidden elements */
var questionsE1= document.querySelector(".questions-lists");

/* question and results elements*/
let questionE1 = document.querySelector("#questions");
const rightWrong = document.querySelector("#results");
let questionCount = 0;

*// Final SCORE *//

const finalScoreE1= document.querySelector("#final");
let ScoreListE1 = document.querySelector("#initials");

/*high score*/
const highScoreE1=document.querySelector("#high-score-section");
let scoreListE1= document.querySelector(".scores-list");
let scoreList=[];

/* answer buttom*/
const answerBtn= document.querySelectorAll("button.answers-btn");

/*submit,start, view ans clear variables*/
let submitBtn= document.querySelector("#sub-btn");
let clearBtn= document.querySelector("#clear");
let nsBtn= document.querySelector("#hs-btn");
let backBtn=document.querySelector("#back");

/*answer var*/
const ansBtn1= document.querySelector("#answer-0");
const ansBtn2= document.querySelector("answer-1");
const ansBtn3= document.querySelector("answer-2");
const ansBtn4= document.querySelector("answer-3");

/* quiz Questions arry*/
const questions=[
    {
question: "How do you create a function in JavaScript?",
answers:["a) function =myFunction()", "b) function my Function()", "c) function:myFunction()", "d) functionMyFunction()"],
correct: "1"
},
{
question: "Which sigh turns 'true' into 'false'?",
answers: ["a) ?", "b) -", "c) |","d) !"]
correct: "3"
},
{
question: "How can you add a comment in JavaScript?",
answers: ["a) <!---This is a comment -->", "b) -This is a comment-", "c) / This is a comment","d) 'This is a comment'"],
correct: "2"
}, 
{
questions: "What Event occurs when a user clicks on an HTML element?",
answers: ["a) onclick", "b) onmouseover", "c) onchange", "d) onmouserclick"],
correct: "0"
}

];

/* timer start */
function setTime() {
    let timerInterval = setInterval(function () {
secLeft--;
time.textContent = 'Timer: ${secLeft} seconds';

if (secLeft === 0 || questionCount === questions.length) {
clearInterval(timerInterval);
questionE1.getElementsByClassName.display = "none";
finalScoreEL.style.display = "block";
score.textContent = secLeft;
}
    }, 1000);

    }

    /* start quiz function*/
function startQuiz() {
begin.style.display = "none";
questionsE1.style.display ="block";
questionCount = 0;

setTime();
setQuestion(questionCount);

}

/* question show function*/
function setQuestion(id) {
    if (id < questions.length){
questionE1.textContent = questions[id].question;
ansBtn1.textcontent = questiions[id].answers[0];
ansBtn2.textcontent = questiions[id].answers[1]
ansBtn3.textcontent = questiions[id].answers[2]
ansBtn4.textcontent = questiions[id].answers[3]
}
}

/* check answers function */
function checkAnswers(event) {
event.preventDefault():

}

/* check answers function */
function checkAnswers(event) {
event.preventDefault();

/* right-wrong element*/
rightWrong.style.display = "block";
let p = document.createElement("p");
rightWrong.appendChild(p);

/*display right-wrong for specified time */
setTimeout(function () {
p.style.display = "none";

}, 1000);

/*display right on right answer */
if (questions[questionCount].correct === event.target.value) {
    p.textContent = "correct!!";
}

/* display wrong on wrong answer*/
else if (questions[questionCount].correct !== event.target.value) {
secLeft = secLeft - 10;
p.textContent = "Incorrect!";
}

if (questionCount < questiions.length) {
    questionCount++;
}
setQuestion(questionCount);
}

/* function to add initals to List*/
function addScore(event) {
    event.preventDefault();

    finalScoreE1.style.display = "none";
    highScoreE1.style.display ="block";

    let init = initialInput.value.toUpperCase();
    scoreList.push({ initials: init,score:secLeft});

    /*sort hs list*/
    scoreList = scoreList.sort((a,b) => {
if (a.score < b.score) {
return 1;
} else {
    return -1;

}
  }); 

  scoreList.innerHTML="";
  for (Let i =0; i < scoreList.length; i++) {
let li = document.createElement("li");
li.textContent = '${scoreList[i].initials}: ${scoreList[i].score}';
scoreListE1.append(li);
}

/* hs list storage*/
storeHS();
displayScores();

}
function storeHs() {
    localStorage.setItem("scoreList"), JSON.stringify(ScoreList);
}
function displayScores() {
let savedScores= JSON.parse(localStorage.getItem("scoreList"));
if (savedScores !== nukk) {
    scoreList = savedScores;
}
}
/* clear local storage HS*/
function clearScores(){
localStorage.clear();
scoreListE1.innerHTML="";
}
 /* function to start quiz*/
 startQuiz.addEventListener("click", startQuiz);

 answerBtn.forEach(item =>{
    item.addEventListener("click", checkAnswers);

 });

 /* back event function*/
 backBtn.addEventListener("click", function () {
highScoreE1.style.display ="none";
begin.style.display ="block";
secLeft =80;
time.textContent ='Timer: $(secLeft} seconds';
 });

 /* clear btn */
 clearBtn.addEventListener("click", clearScores);

 /*no score message display all listerner event*/
hsBtn.addEventListener("click", function () {
if (highScoreE1.style.display ==== "none") {
    highScoreE1.style.display = "block";
}
else if (highScoreE1.style.display === "block") {
highScoreE1.style.display = "none";
}
else {
    return alert("Pleasr take the quiz to view high scores!!");
}
});
 



  



















]






