import {athleteQustions, premierLeagueQustions} from './questionsData.js';
import confettiLoop from './animations.js';

const startButton = document.querySelector(".quiz__start-btn");
const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

let quizContainer, resultContainer;
let  score, questionIndex;
let questionArray, questionArrayColor, quizLength;
let selectedOption, correctAnswer;
let player, playerScore;



// functions
const findPlayer = () => {
    let playerNameArray = JSON.parse(localStorage.getItem("users"));
    let playerName = [...playerNameArray.slice(-1)]
    console.log(playerNameArray, playerName);

    playerName.forEach(name => {
        player = name.name;
        name.score = score;
        console.log(player, playerScore);
    })
}
// get quiz theme
const getTheme = (theme) => {
    questionArray = theme === "premier-league" ? premierLeagueQustions : athleteQustions;
    questionArrayColor = theme === "premier-league" ? primary : secondary;
    startQuiz(startButton);
}

//start quiz
const startQuiz = (e) => {
    e.addEventListener('click', () => {
        score = 0;
        questionIndex = 0;
        modal.style.display = "flex";
        e.disabled = true;
        findPlayer();
        gameHandler();
    })
} 

const closeQuiz = (btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
        startButton.disabled = false;
    })
}

// answer selection
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

// check answer 
const checkAnswer = (answer, correct) => {
    if(answer === correct){
        score++;
        playerScore++;
        console.log("correct! score: " + score)
    } else {
        console.log("wrong! score: " + score)
    }
}

// toggle next question
const nextQuestion = (btn) => {
    questionIndex++;
    
    btn.addEventListener('click', () => {
        if(questionIndex+1 <= quizLength){
            console.log(questionArray[questionIndex])          
            checkAnswer(selectedOption, correctAnswer)
            gameHandler();
            console.log("index ", questionIndex, "length: ", quizLength, "score: ", score)
            console.log("player: ", player, "score: ", playerScore)
        } else if(questionIndex+1 > quizLength){
            checkAnswer(selectedOption, correctAnswer)
            startButton.disabled = false;
            console.log("index ", questionIndex, "length: ", quizLength, "score: ", score)
            displayResult();
        }
    })
}

// end quiz / submit quiz
const displayResult = () => {
    displayQuiz(questionArray, questionArrayColor);
    const modalContent = document.querySelector(".modal-content");
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    confettiLoop(modalContent);
    closeQuiz(document.querySelector('.exit-btn'));
}


// quiz display
const displayQuiz = (data, color) => {    
    let htmlTxt = "";
    let resultMsg = score > 3 ? "Godt jobbet!" : "Du kan bedre...";
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
        ></quiz-modal>
        `;
    }
    
    modal.innerHTML = htmlTxt;
    resultContainer = document.querySelector('.result-content');
    quizContainer = document.querySelector('.quiz-content');
}

// handle functions
const gameHandler = () => {
    displayQuiz(questionArray, questionArrayColor);
    selectAnswer(document.querySelectorAll(".answer-container button"), correctAnswer);
    nextQuestion(document.querySelector('.next'));
    closeQuiz(document.querySelector(".close-btn"));
}

const addScore = () => {

}
export default getTheme;