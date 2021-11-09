import * as q from "./questionsData.js";

const quizButton = document.querySelector(".quiz__btn");
//const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";

const openModal = () => { modal.classList.toggle("open-modal") };

quizButton.addEventListener("click", openModal);
closeButton.addEventListener("click", openModal);

const generateQuiz = (theme) => {
    switch(theme){
        case "premier-league":
            displayQuiz(q.premierLeagueQandA,primary);
            break;
        
        case "norwegian-athletes":
            displayQuiz(q.athleteQandA, secondary);
            break;
    }
}

const displayQuiz = (data, color) => {
    const htmlTxt = data.map(quiz => {`
        <quiz-modal
            backgroundModal = "${color}"
            quizNumber = "${quiz.number}"
            quizQuestion = "${quiz.question}"
            answerBtn = "${quiz.suggestionOne}"
            answerBtn = "${quiz.suggestionTwo}"
        ></>quiz-modal>
        `;
    })
    modal.innerHTML = htmlTxt;
};

export default generateQuiz;