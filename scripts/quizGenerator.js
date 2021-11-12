import {athleteQustions, premierLeagueQustions} from './questionsData.js';

const startButton = document.querySelector(".quiz__start-btn");
const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

let  score, questionIndex;
let questionArray, questionArrayColor, quizLength;
let selectedOption, correctAnswer;

// functions
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
            btn.classList.add("selected");
        });
    })
}

// check answer 
const checkAnswer = (answer, correct) => {
    if(answer === correct){
        score++;
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
            console.log("index ", questionIndex, "length: ", quizLength, "score: ", score)
            console.log(questionArray[questionIndex])
            
            checkAnswer(selectedOption, correctAnswer)
            gameHandler();
        } else if(questionIndex+1 > quizLength){
            alert("ferdii")
        }
    })
}

// end quiz / submit quiz


// quiz display
const displayQuiz = (data, color) => {    
    let htmlTxt = "";
    let resultsMsg = score > 3 ? "Godt jobbet!" : "Du kan bedre...";

    quizLength = data.length;
    correctAnswer = data[questionIndex].correctAnswer;

    
    htmlTxt = `
    <quiz-modal
    backgroundModal = "${color}"
    quizNumber = "${questionIndex+1 + "/" + data.length}"
    quizQuestion = "${data[questionIndex].question}"
    answerA = "${data[questionIndex].answers.a}"
    answerB = "${data[questionIndex].answers.b}"
    score = "${score}"
    ></quiz-modal>
    `;
    
    modal.innerHTML = htmlTxt;
}

// handle functions
const gameHandler = () => {
    displayQuiz(questionArray, questionArrayColor);
    selectAnswer(document.querySelectorAll(".answer-container button"), correctAnswer);
    nextQuestion(document.querySelector('.next'));
    closeQuiz(document.querySelector(".close-btn"));
}


export default getTheme;