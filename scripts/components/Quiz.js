const quizTemplate = document.createElement("template");

quizTemplate.innerHTML = ``;

class Quiz extends HTMLElement {
    constructor () {
        super()
        
        this.appendChild(quizTemplate.content.cloneNode(true));

        const contentColor = this.getAttribute("content-colour");
    }
}