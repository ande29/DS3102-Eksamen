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
        }
        img{
            max-width: 100%;
            height: 200px;
            
        }
        .inside{
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            background: rgb(55, 0, 58);
            background-image: linear-gradient(to top, rgb(69, 19, 73) 0%, rgb(55, 0, 58) 100%);
            background-position: center;
            border-radius: 20px;
            overflow: hidden;
        }
        .header, .footer, .logo-box{
            color: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .header{
            padding: 10px;
            height: 100px;
            font-size: 1.5rem;
        }
        .logo-box{
            height: 220px;
        }
        .footer{
            height: 70px;

        }
        .btn{
            width: 200px;
            height: 50px;
            border-radius: 8px;
            background: rgb(55, 0, 58);
            background-image: linear-gradient(315deg, rgba(248, 206, 236,.5) 0%, rgba(168, 139, 235,.5) 74%);
            color: black;
            font-size: 1.2rem;
            border: 1px solid rgb(55, 0, 58);
            color: #ccc;
        }
        .btn:hover{
            border: 1px solid white;
            color: #fff;
            background-image: linear-gradient(315deg, rgba(168, 139, 235, .5) 0%, rgba(248, 206, 236, .5) 74%);
            transition: .8s;
        }
    </style>

    <article>
        <div class="inside">
            <div class="header">
                <h2 class="club"></h2>
                <p class="city"></p>
            </div>
            <div class="logo-box">
                <img class"logo" alt="">
            </div>
            <div class="trophies"></div>
            <div class="footer">
                <button class="btn"></button>
            </div>
        </div>
    </article>
`;

class Card extends HTMLElement {
    constructor() {
        super()

        this.appendChild(cardTemplate.content.cloneNode(true))

        

        const club = this.getAttribute("club");
        this.querySelector(".club").innerHTML = club;

        const city = this.getAttribute("city");
        this.querySelector(".city").innerHTML = city;

        const button = this.getAttribute("button");
        this.querySelector(".btn").innerHTML = button;
        
        const imgUrl = this.getAttribute("imgUrl");
        this.querySelector("img").src = `../../images/premier-league/logo/${imgUrl}`;
        
        const imgAlt = this.getAttribute("imgAlt");
        this.querySelector("img").alt = imgAlt;
    }
}

window.customElements.define("card-item", Card)