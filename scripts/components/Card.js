const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `

    <style>
        .card {
            width: 370px;
            height: 450px;
            box-shadow: inset 5px 5px 5px rgba(55, 0, 58, .2),
                        inset -5px -5px 15px rgba(69, 19, 73, .1),
                        5px 5px 15px rgba(55, 0, 58, .3), 
                        -5px -5px 15px rgba(69, 19, 73, .1);
            border-radius: 15px;
            margin: 20px auto;
            padding: 20px;
            perspective: 1000px;
        }
        .inside{
            position: relative;
            width: 100%;
            height: 100%;      
            cursor: pointer;
            transform-style: preserve-3d;
            transition: transform 1s;
        }
        .flipped {
            transform: rotateY(180deg);
        }
        .inside-face{
            overflow: hidden;
            border-radius: 15px;
            position: absolute;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }

        .inside__front .header, .inside-face .content {
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

        .inside__back .header img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-top: 10px;
        }
        .inside__back .header h2{
            color: #eee;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 50px;
        }
        .inside__back {
            transform: rotateY(180deg);
            background-color: #f3f3f3;
            color: #000;
        }
        .inside__back .header {
            height: 200px;
            border-radius: 15px 15px 50% 0;
            text-align: center;
        }
        .inside__back .content{
            background-color: c1c1c1;
            padding: 20px;
            color: #010101;
        }
        .inside__back .content .bio{
            background-color: #fff;
            width: 100%;
            padding: 20px;
        }

    </style>

    <article class="card">
        <div class="inside">

            <div class="inside-face inside__front">
                <div class="header">
                    <h2 class="name"></h2>
                </div>
                <div class="content">
                    <img>
                </div>
            </div>

            <div class="inside-face inside__back">
                <div class="header">
                    <img>
                    <h2 class="name">Lorem Ipsum Dolor Amores</h2>
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
        this.querySelectorAll(".name").forEach(title => {
            title.innerHTML = name;
        })

        const bio = this.getAttribute("bio");
        this.querySelector(".bio").innerHTML = bio;
        
        const imgUrl = this.getAttribute("imgUrl");
        this.querySelectorAll("img").forEach(img => {
            img.src = `../../images/${imgUrl}`;
        })
        
        const imgAlt = this.getAttribute("imgAlt");
        this.querySelector("img").alt = imgAlt;

        const background = this.getAttribute("background");
        this.querySelector(".inside-face").style = `background: ${background};`;
        this.querySelector(".inside__back .header").style = `background: ${background};`;
    }
}

window.customElements.define("card-item", Card)

