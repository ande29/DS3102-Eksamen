const quizTemplate = document.createElement("template");

quizTemplate.innerHTML = `
    <style>
    .modal-content{
        position: relative;
        box-shadow:  10px 8px 5px rgba(55, 0, 58, .2);
        color: white;
        width: 400px;
        height: 300px;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 1rem;
    }
    .close-btn{
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
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
        text-align: center;
    }
    .question-header{
        font-weight: bold;
        text-align: center;
        margin: 1rem;
        border-bottom: 1px solid white;
    }
    .answer-container{
        display: flex;
        align-items: center;
        width: 100%;
        height:100%;
    }
    .quiz-btn{
        width: 50%;
        height: 40%;
        //background-color: rgb(34, 33, 169);
        border-radius: 1rem;

    }
    .navigation-container{
        width: 100%;
        display:flex;
        align-items: flex-end;
        justify-content: space-between;
        margin: 0.2rem;
    }
    .nav-btn{
        width: 20%;
        border-radius: 0.5rem;
    }
    </style>

        <article class="modal-content">
            <button class="close-btn"><i class="fas fa-times"></i></button>
            <h2 class="modal-header"></h2>

            <div class="question-content">
                <h2 class="question-number"></h2>
                <p class="question-output"></p>
            </div>

            <div class="answer-container">
                <button class="answer-a quiz-btn"></button>
                <button class="answer-b quiz-btn"></button>
            </div>

            <div class="navigation-container">
                <button class="restart nav-btn">Restart</button>
                <p class="score"></p>
                <button class="next nav-btn">Next</button>
            </div>

        </article>

`;

class Quiz extends HTMLElement {
    constructor () {
        super ();
        
        this.appendChild(quizTemplate.content.cloneNode(true));

        const backgroundModal = this.getAttribute("backgroundModal");
        this.querySelector(".modal-content").style = `background: ${backgroundModal}`;

        const quizNumber = this.getAttribute("quizNumber");
        this.querySelector(".question-number").innerHTML = `${quizNumber}`;

        const quizQuestion = this.getAttribute("quizQuestion");
        this.querySelector(".question-output").innerHTML = `${quizQuestion}`;

        const answerA = this.getAttribute("answerA");
        this.querySelector(".answer-a").innerHTML = `${answerA}`;

        const answerB = this.getAttribute("answerB");
        this.querySelector(".answer-b").innerHTML = `${answerB}`;

        const score = this.getAttribute("score");
        this.querySelector(".score").innerHTML = `${score}`;
    }
};

window.customElements.define("quiz-modal", Quiz);