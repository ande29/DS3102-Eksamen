import {athleteQustions, premierLeagueQustions} from './questionsData.js';
const startButton = document.querySelector(".quiz__start-btn");

const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

let  score = 0;
let questionIndex = 1;
let questionArray, questionArrayColor;

//const closeButton = document.querySelector(".close-btn");
//closeButton.addEventListener("click", openModal);
//const openModal = () => { modal.classList.toggle("open-modal") };
// quizButton.addEventListener("click", openModal);

/*
const openModal = () => { modal.classList.toggle("open-modal") };
quizButton.addEventListener("click", openModal);
const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", openModal); 
*/

// functions

const getTheme = (theme) => {
    questionArray = theme === "premier-league" ? premierLeagueQustions : athleteQustions;
    questionArrayColor = theme === "premier-league" ? primary : secondary;
}

const setStatus = (el, correct) => {
    clearClassList(el);

    if(correct){
        el.classList.add("correct");
    } else {
        el.classList.add("wrong");
    }
}

const clearClassList = (el) => {
    el.classList.remove('correct');
    el.classList.remove('wrong');
}

const checkAnswer = (answer, correct) => {
    if(answer === correct){
        score++;
        console.log("correct! score: " + score)
    } else{
        console.log("wrong! score: " + score)
    }
}
const startQuiz = () => {
    console.log(questionArray);
    displayQuiz(questionArray, questionArrayColor);
}   

const displayQuiz = (data, color) => {
    let htmlTxt = "";

    data.forEach((val, i) => {
        if(questionIndex === i+1){
            let options = val.answers;
            let correct = val.correctAnswer;
            let selectedOption;

            htmlTxt = `
            <quiz-modal
            backgroundModal = "${color}"
            quizNumber = "${questionIndex + "/" + data.length}"
            quizQuestion = "${val.question}"
            answerA = "${val.answers.a}"
            answerB = "${val.answers.b}"
            score = "${score}"
            ></quiz-modal>
            `;

            modal.innerHTML = htmlTxt;
            const answerBtns = document.querySelectorAll(".answer-container button");
            console.log(answerBtns)
            
            answerBtns.forEach(btn => {
                btn.addEventListener('click', () =>{
                    console.log(btn.innerHTML);
                    selectedOption = btn.innerHTML;
                    checkAnswer(selectedOption, correct)
                });
            })
        }
    })
}
startButton.addEventListener('click', startQuiz)

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