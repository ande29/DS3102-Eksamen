import {athleteQustions, premierLeagueQustions} from './questionsData.js';
import confettiLoop from './confettiAnimation.js';
import getUserInfo from './quizStorage.js';

const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";
const userOutput = document.querySelector(".user-output");
const startButton = document.querySelector(".quiz__start-btn");
const activeWindow = window.document.title;


let quizContainer, resultContainer;
let score, questionIndex;
let questionArray, questionArrayColor, quizLength, quizTheme;
let selectedOption, correctAnswer;
let player;
let playerScore = [];

if(localStorage.getItem("scores")){
    playerScore = JSON.parse(localStorage.getItem("scores"))
}else{
    playerScore;
}

const findPlayer = () => {
    let playerNameArray = JSON.parse(localStorage.getItem("users"));
    let playerName = [...playerNameArray.slice(-1)]

    playerName.forEach(name => {
        player = name.name;
        name.score = score;
    })
}

const getTheme = (theme) => {
    quizTheme = theme;
    questionArray = theme === "premier-league" ? premierLeagueQustions : athleteQustions;
    questionArrayColor = theme === "premier-league" ? primary : secondary;
}

const validateInput = (theme) => {
   let nameInput = document.querySelector("#name-input");
    let message = ``;
    if(nameInput.value.length > 0 && theme){
        message = `<p>Hei</p>`;
        getUserInfo();
        startQuiz(startButton)
    }else if(nameInput.value.length < 1 && !theme){
        message = `<p style="color:red">Skriv inn brukernavn og velg tema</p>`
    }else if(nameInput.value.length < 1){
        message = `<p style="color:red">Skriv inn brukernavn</p>`
    }else if(!theme){
        message = `<p style="color:red">Velg tema</p>`
    }

    userOutput.innerHTML = message;
}

if(activeWindow === "Quiz"){
    startButton.addEventListener('click', () => {
        validateInput(quizTheme)
    })
}

const startQuiz = (e) => {
        score = 0;
        questionIndex = 0;
        modal.style.display = "flex";
        e.disabled = true;
        findPlayer();
        gameHandler();
} 

const closeQuiz = (btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
        startButton.disabled = false;
        location.reload();
    })
}

const selectAnswer = (btns) => {
    let next = document.querySelector('.next');
    next.disabled = true;
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) =>{
            selectedOption = e.target.innerHTML;
            if(selectedOption){
                btns.forEach(btn=>{
                    btn.classList.remove("selected")
                })
                next.disabled = false;
            }
            btn.classList.toggle("selected");
        });
    })
}

const checkAnswer = (answer, correct) => {
    if(answer === correct){
        score++;
    }    
}

const nextQuestion = (btn) => {
    questionIndex++;
    
    btn.addEventListener('click', () => {
        if(questionIndex+1 <= quizLength){
            checkAnswer(selectedOption, correctAnswer)
            gameHandler();
        } else if(questionIndex+1 > quizLength){
            checkAnswer(selectedOption, correctAnswer)
            startButton.disabled = false;
            displayResult();
        }
    })
}

const displayResult = () => {
    displayQuiz(questionArray, questionArrayColor);
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    confettiLoop(document.querySelector(".modal-content"));
    closeQuiz(document.querySelector('.exit-btn'));
}

const displayQuiz = (data, color) => {    
    let htmlTxt = "";
    let resultMsg = score > 3 ? "Godt jobbet!" : "Du kan bedre...";
    let icon = score > 3 ? "fa-medal" : "fa-award";
    quizLength = data.length;
    let playerName = player

    if(questionIndex < quizLength){
        correctAnswer = data[questionIndex].correctAnswer;
        
        htmlTxt = `
        <quiz-modal
        backgroundModal = "${color}"
        quizNumber = "${questionIndex+1 + "/" + quizLength}"
        quizQuestion = "${data[questionIndex].question}"
        answerA = "${data[questionIndex].answers.a}"
        answerB = "${data[questionIndex].answers.b}"
        player = "${playerName}"
        score = "Score: ${score}"
        ></quiz-modal>
        `;
    } else {
        htmlTxt = `
        <quiz-modal
        backgroundModal = "${color}"
        resultHeader = "${resultMsg}"
        resultMsg = "Du fikk ${score} poeng av ${quizLength} mulige"
        icon = "${icon}"
        ></quiz-modal>
        `;
        playerScore.push({name:playerName, score:score});
        localStorage.setItem("scores", JSON.stringify(playerScore));
    }
    modal.innerHTML = htmlTxt;
    resultContainer = document.querySelector('.result-content');
    quizContainer = document.querySelector('.quiz-content');
}

const gameHandler = () => {
    displayQuiz(questionArray, questionArrayColor);
    selectAnswer(document.querySelectorAll(".answer-container button"), correctAnswer);
    nextQuestion(document.querySelector('.next'));
    closeQuiz(document.querySelector(".close-btn"));
}

export default getTheme;