const bannerTemplate = document.createElement("template")

bannerTemplate.innerHTML = `
    <style>
        .banner-img{
            max-width: 100%;
            height: auto;
        }
        
    </style>

   <section class="banner-container">
        <img class="banner-img">
   </section>
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