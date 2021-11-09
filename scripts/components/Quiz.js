const quizTemplate = document.createElement("template");

quizTemplate.innerHTML = `
    <style>
    .modal-content{
        background-color:rgb(34, 33, 169);
        box-shadow:  10px 8px 5px rgba(55, 0, 58, .2);
        color: white;
        width: 50%;
        height: auto;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 1rem;
    }
    .close-btn{
        position: absolute;
        top: 0%;
        left: 0%;
        background-color: rgb(34, 33, 169);
        color: white;
    }
    .quiz-btn:hover{
        background-color: green;
        transition: 1s;
    }
    .question-content{
        padding: 1rem;
    }
    .question-header{
        font-weight: bold;
        text-align: center;
        margin: 1rem;
        border-bottom: 1px solid white;
    }
    .quiz-btn{
        width: 90%;
        padding: 0.5rem;
        //background-color: rgb(34, 33, 169);
        border-radius: 1rem;
    }
    </style>

        <article class="modal-content">
            <button class="close-btn"><i class="fas fa-times"></i></button>
            <h2 class="modal-header"></h2>
            <div class="question-content">
                <h2 class="question-number"></h2>
                <p class="question-output"></p>
            </div>
            <button class="answer-btn quiz-btn"></button>
            <button class="answer-btn quiz-btn"></button>
        </article>

`;

class Quiz extends HTMLElement {
    constructor () {
        super ();
        
        this.appendChild(quizTemplate.content.cloneNode(true));

        const backgroundModal = this.getAttribute("backgroundModal");
        this.querySelector(".modal-content").style = `background-color = ${backgroundModal}`;

        const quizNumber = this.getAttribute("quizNumber");
        this.querySelector(".question-number").innerHTML = `${quizNumber}`;

        const quizQuestion = this.getAttribute("quizQuestion");
        this.querySelector(".question-output").innerHTML = `${quizQuestion}`;

        const answerBtn = this.getAttribute("answerBtn");
        this.querySelector(".answer-btn").innerHTML = `${answerBtn}`;
    }
};

window.customElements.define("quiz-modal", Quiz);