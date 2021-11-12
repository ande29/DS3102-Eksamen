import {athleteQustions, premierLeagueQustions} from './questionsData.js';

const startButton = document.querySelector(".quiz__start-btn");

const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

let  score = 0;
let questionIndex = 0;
let questionArray, questionArrayColor, quizLength;

// functions
// get quiz theme
const getTheme = (theme) => {
    questionArray = theme === "premier-league" ? premierLeagueQustions : athleteQustions;
    questionArrayColor = theme === "premier-league" ? primary : secondary;
    console.log(questionArray[questionIndex])

    startQuiz(startButton);
}

//start quiz
const startQuiz = (e) => {
    e.addEventListener('click', () => {
        displayQuiz(questionArray, questionArrayColor);
        modal.style.display = "flex";
    })
} 

// answer selection
const selectAnswer = (btns, correct) => {
    let selectedOption;
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
            
            console.log(!selectedOption, selectedOption)
        });
    })
}


// toggle next question
const nextQuestion = (btn) => {
    questionIndex++;
    console.log(questionIndex+1 + " " + quizLength)
    btn.addEventListener('click', () => {
        if(questionIndex+1 <= quizLength){
            console.log("index ", questionIndex, "length: ", quizLength, "score: ", score)
            console.log(questionArray[questionIndex])
            displayQuiz(questionArray, questionArrayColor);
        } else if(questionIndex+1 > quizLength){
            alert("score: ", score);
        }
    })
}


// check answer 
const checkAnswer = (answer, correct) => {
    if(answer === correct){
        console.log("correct! score: " + score)
    } else{
        console.log("wrong! score: " + score)
    }
}


// quiz display
const displayQuiz = (data, color) => {
    let htmlTxt = "";

            quizLength = data.length;
            let options = data[questionIndex].answers;
            let correct = data[questionIndex].correctAnswer;
            let selectedOption;

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

            selectAnswer(document.querySelectorAll(".answer-container button"), correct);
            nextQuestion(document.querySelector('.next'))
}

// events






/*
const displayQuiz = (data, color) => {
    let htmlTxt = '';
    let correct, choice, alternatives;

   Object.values(data).forEach((val, index) => {
       correct = val.correctAnswer;
       alternatives = document.querySelectorAll(".quiz-btn");
       
       htmlTxt = `
       <quiz-modal
       backgroundModal = "${color}"
       quizNumber = "${index}"
       quizQuestion = "${val.question}"
       answerA = "${val.answers.a}"
       answerB = "${val.answers.b}"
       restart = "Restart"
       next = "Next"
       ></quiz-modal>
       `;
       //console.log(val, index, correct);
       modal.innerHTML = htmlTxt;

       alternatives.forEach(alt => {
           alt.addEventListener('click', console.log(alt))
       })
    });
};
*/

const generateQuiz = (theme) => {
    switch(theme){
        case "premier-league":
            //displayQuiz(premierLeagueQustions, primary);
            getTheme(theme)
            break;
        
        case "norwegian-athletes":
            //displayQuiz(athleteQustions, secondary);
            getTheme(theme)
            break;
    }
};





export default generateQuiz;