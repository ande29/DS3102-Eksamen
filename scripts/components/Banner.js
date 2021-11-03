const bannerTemplate = document.createElement("template")

bannerTemplate.innerHTML = `
    <style>
        .banner-img{
            width: 100%;
            height: auto;
            max-height: 80vh;
            display: block;
            background: rgb(77,27,78);
            background: linear-gradient(90deg, rgba(77,27,78,1) 0%, rgba(31,64,200,1) 100%);
        }
        
    </style>

        <img class="banner-img">
`;


class Banner extends HTMLElement {
    constructor() {
        super()

        this.appendChild(bannerTemplate.content.cloneNode(true))

        const imgUrl = this.getAttribute("imgUrl");
        this.querySelector("img").src = `../../images/banners/${imgUrl}`;

        const imgAlt = this.getAttribute("imgAlt");
        this.querySelector("img").alt = imgAlt;
    }
}

window.customElements.define("banner-img", Banner)