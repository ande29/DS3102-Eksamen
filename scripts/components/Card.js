const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `

    <style>
        article {
            max-width: 370px;
            height: 420px;
            position: relative;
            box-shadow: inset 5px 5px 5px rgba(55, 0, 58, .2),
                        inset -5px -5px 15px rgba(69, 19, 73, .1),
                        5px 5px 15px rgba(55, 0, 58, .3), 
                        -5px -5px 15px rgba(69, 19, 73, .1);
            border-radius: 15px;
            margin: 20px auto;
        }
        .inside{
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-radius: 15px;
            overflow: hidden;           
        }
        
        .inside__front .header, .inside__front .content{
            color: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .inside__front .header{
            padding: 10px;
            height: 100px;
            font-size: 1.5rem;
        }
        .inside__front .content{
            height: 220px;
        }
        .inside__front img{
            max-width: 100%;
            height: 200px;
        }

        .inside__back {
            height: 390px;
        }
        .inside__back .content{
            background-color: #f3f3f3;
            height: 290px;
        }
        .inside__back .header {
            height: 100px;
        }
        .flipped {
            transform: rotateY(180deg);
        }
    </style>

    <article class="card">
        <div class="inside">
            <div class="inside__front">
                <div class="header">
                    <h2 class="name"></h2>
                </div>
                <div class="content">
                    <img>
                </div>
            </div>

            <div class="inside__back">
                <div class="header">
                    <img class="profile-img">
                    <h2 class="name"></h2>
                </div>
                <div class="content">
                    
                    <p class="bio"></p>
                </div>
            </div>
            
        </div>
    </article>
`;

 class Card extends HTMLElement {
    constructor( ) {
        super()

        this.appendChild(cardTemplate.content.cloneNode(true))
        
        const name = this.getAttribute("name");
        this.querySelector(".name").innerHTML = name;
        
        const imgUrl = this.getAttribute("imgUrl");
        this.querySelector("img").src = `../../images/${imgUrl}`;
        
        const imgAlt = this.getAttribute("imgAlt");
        this.querySelector("img").alt = imgAlt;

        const background = this.getAttribute("background");
        this.querySelector(".inside").style = `background: ${background};`;
    }
}

window.customElements.define("card-item", Card)

