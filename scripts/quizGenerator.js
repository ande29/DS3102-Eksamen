import {athleteQustions, premierLeagueQustions} from './questionsData.js';
const quizButton = document.querySelector(".quiz__btn");

const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

let theme, score, questionIndex;

//const closeButton = document.querySelector(".close-btn");
//closeButton.addEventListener("click", openModal);
//const openModal = () => { modal.classList.toggle("open-modal") };
// quizButton.addEventListener("click", openModal);

const startQuiz = () => {

};

const getTheme = (theme) => {
    theme = theme;
}

const displayQuiz = (data, color) => {
    let htmlTxt = ``;
   Object.values(data).forEach(val => {
           htmlTxt = `
           <quiz-modal
           backgroundModal = "${color}"
           quizNumber = "${val.number}"
           quizQuestion = "${val.question}"
           answerA = "${val.answers.a}"
           answerB = "${val.answers.b}"
           restart = "Restart"
           next = "Next"
           ></quiz-modal>
           `;
           console.log(val);
   });
   modal.innerHTML = htmlTxt;
}

const displayQuizOne = (data, color) => {
    const htmlTxt = data.map(quiz => {
        return `
           <quiz-modal
            backgroundModal = "${color}"
            quizNumber = "${quiz.number}"
            quizQuestion = "${quiz.question}"
            answerBtn = "${quiz.answers.a}"
            answerBtn = "${quiz.answers.b}"
            restart = "Restart"
            next = "Next"
            ></quiz-modal>
        `;
    })
    modal.innerHTML = htmlTxt;
};

const generateQuiz = (theme) => {
    switch(theme){
        case "premier-league":
            getTheme(theme);
            break;
        
        case "norwegian-athletes":
            getTheme(theme);
            break;
    }
};





export default generateQuiz;