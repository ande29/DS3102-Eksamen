import {athleteQustions, premierLeagueQustions} from './questionsData.js';
const startButton = document.querySelector(".quiz__start-btn");

const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

let  score = 0;
let questionIndex = 0;
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


// get quiz theme
const getTheme = (theme) => {
    questionArray = theme === "premier-league" ? premierLeagueQustions : athleteQustions;
    questionArrayColor = theme === "premier-league" ? primary : secondary;
    console.log(questionArray[questionIndex])
}

// start quiz
const startQuiz = () => {
    console.log(questionArray);
    displayQuiz(questionArray, questionArrayColor);
}   

// toggle next question
const nextQuestion = (btn) => {
    btn.addEventListener('click', () => {
        questionIndex++;
        console.log("i " + questionIndex)
        console.log(questionArray[questionIndex])
        displayQuiz(questionArray, questionArrayColor);
    })
}


// check answer 
const checkAnswer = (answer, correct) => {
    if(answer === correct){
        score++;
        console.log("correct! score: " + score)
    } else{
        console.log("wrong! score: " + score)
    }
}


// quiz display
const displayQuiz = (data, color) => {
    let htmlTxt = "";

            let options = data[questionIndex].answers;
            let correct = data[questionIndex].correctAnswer;
            let selectedOption;

            htmlTxt = `
            <quiz-modal
            backgroundModal = "${color}"
            quizNumber = "${questionIndex + "/" + data.length}"
            quizQuestion = "${data[questionIndex].question}"
            answerA = "${data[questionIndex].answers.a}"
            answerB = "${data[questionIndex].answers.b}"
            score = "${score}"
            ></quiz-modal>
            `;

            modal.innerHTML = htmlTxt;


            const answerBtns = document.querySelectorAll(".answer-container button");
            answerBtns.forEach(btn => {
                btn.addEventListener('click', (e) =>{
                    selectedOption = e.target.innerHTML;
                    checkAnswer(selectedOption, correct)
                });
            })
            nextQuestion(document.querySelector('.next'))
}

// events
startButton.addEventListener('click', startQuiz)




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