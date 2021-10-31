const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `

    <style>
        
    </style>

    <article>
        <div>
        <div>
            <img>
            <h2></h2>
            <p></p>
            <button></button>
        </div>
    </article>
`;

class Card extends HTMLElement {
    constructor() {
        super()

        this.appendChild(cardTemplate.content.cloneNode(true))

        const title = this.getAttribute("title");
        this.querySelector("h2").innerHTML = title;

        const city = this.getAttribute("city");
        this.querySelector("p").innerHTML = city;

        const button = this.getAttribute("button");
        this.querySelector("button").innerHTML = button;
        
        const imgUrl = this.getAttribute("imgUrl");
        this.querySelector("img").src = `../../images/${imgUrl}`;
    }
}

window.customElements.define("card-item", Card)