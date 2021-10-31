const bannerTemplate = document.createElement("template")

bannerTemplate.innerHTML = `
    <style>
        
    </style>

   
`;


class Banner extends HTMLElement {
    constructor() {
        super()

        this.shadowRoot.appendChild(navigationTemplate.content.cloneNode(true))
    }
}

window.customElements.define("banner", Banner)