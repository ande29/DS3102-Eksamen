const quizTemplate = document.createElement("template");

quizTemplate.innerHTML = `
    <style>
    .modal-content{
        width: 100vw;
        position: relative;
        box-shadow:  10px 8px 5px rgba(55, 0, 58, .2);
        color: white;
        height: 300px;
        border-radius: 1rem;
        padding: 1rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .quiz-content{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .result-content{
        display: none;
    }
    .close-btn{
        position: absolute;
        border: none;
        background-color: rgba(255, 255, 255, .0);
        border-radius: 50%;
        cursor: pointer;
        top: 0;
        left: 0;
        font-size: 1.5rem;
        margin: 10px;
    }
    .close-btn:hover{
        text-shadow: 0px 0px 10px rgba(255,255,255,0.6);
        transition: .5s;
    }
    .quiz-btn:hover{
        background-color: rgba(255, 255, 255 ,.1);
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
        border-radius: 1rem;
        margin: 10px;
    }
    .navigation-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0.2rem;
        height: 50px;
        align-content: center;
        flex-direction: row;
    }
    .navigation-container *{
        text-align: center;
        width: 33%;
    }
    .nav-btn{
        border-radius: 0.5rem;
        height: 100%
    }
    .result-content{
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
    }
    .result-header{
    }
    .result-msg{

    }
    .exit-btn{
        width: 50%;
        bottom: 0;
        height: 50px;
        font-size: 1.2rem;
        background: none;
        margin: 0 auto;
        position: absolute;
        left: 0;
        right: 0;
        margin-bottom: 10px;
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        color: #cfcfcf;
    }
    .exit-btn:hover{
        border: 1px solid white;
        color: white;
        background: rgba(255, 255, 255, .1);
        transition: .5s;
    }
    </style>

        <article class="modal-content">
            <section class="quiz-content">
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
                    <p class="player"></p>
                    <p class="score"></p>
                    <button class="next nav-btn">Next</button>
                </div>
            </section>

            <section class="result-content">
                <h2 class="result-header"></h2>
                <p class="result-msg"></p>
                <button class="exit-btn">Tilbake</button>
            </section>

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

        const player = this.getAttribute("player");
        this.querySelector(".player").innerHTML = `${player}`;

        const score = this.getAttribute("score");
        this.querySelector(".score").innerHTML = `${score}`;
        
        const resultHeader = this.getAttribute("resultHeader");
        this.querySelector(".result-header").innerHTML = `${resultHeader}`;
        
        const resultMsg = this.getAttribute("resultMsg");
        this.querySelector(".result-msg").innerHTML = `${resultMsg}`;
    }
};

window.customElements.define("quiz-modal", Quiz);