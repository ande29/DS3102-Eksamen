import {athleteQandA, premierLeagueQandA} from "./questionsData.js";

const quizButton = document.querySelector(".quiz__btn");

const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

//const closeButton = document.querySelector(".close-btn");
//closeButton.addEventListener("click", openModal);
const openModal = () => { modal.classList.toggle("open-modal") };
 quizButton.addEventListener("click", openModal);



const displayQuiz = (data, color) => {
    const htmlTxt = data.map(quiz => {
        return `
           <quiz-modal
            backgroundModal = "${color}"
            quizNumber = "${quiz.number}"
            quizQuestion = "${quiz.question}"
            answerBtn = "${quiz.suggestionOne}"
            answerBtn = "${quiz.suggestionTwo}"
            ></quiz-modal>
        `;
    })
    modal.innerHTML = htmlTxt;
};

const generateQuiz = (theme) => {
    switch(theme){
        case "premier-league":
            displayQuiz(premierLeagueQandA, primary);
            break;
        
        case "norwegian-athletes":
            displayQuiz(athleteQandA, secondary);
            break;
    }
};





export default generateQuiz;