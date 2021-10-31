const tabsTemplate = document.createElement("template")

tabsTemplate.innerHTML = `
    <style>
        .content-tabs{
        display: flex;
        justify-content: center;
        background-color: rgb(55, 0, 58);
        padding-bottom: 20px;
        }
        .tabs{
            width: 50%;
            background-color: rgb(55, 0, 58);
            border: 1px solid rgba(255, 255, 255,.5);
            padding: 10px 5px;
            color: #999;
        } 
        .tabs:hover{
            background-color: rgba(255, 255, 255, .1);
            border: 1px solid rgba(255, 255, 255, .1);
            color: #fff;
        }
        .active-tab{
            color: #eee;
            border: 1px solid rgb(55, 0, 58);
            border-top: none;
        }
    </style>

    <nav class="content-tabs">
        <input data-theme="premier-league"type="button" name="premier-league" class="tabs active-tab" id="pl-tab" value="Premier League">
        <input data-theme="norwegian-athletes"type="button" name="norwegian-athletes" class="tabs" id="athlete-tab" value="Norske Idrettsutøvere">
    </nav>
`;


class Tabs extends HTMLElement {
    constructor() {
        super()

        this.shadowRoot.appendChild(tabsTemplate.content.cloneNode(true))
    }
}

window.customElements.define("tab", Tabs)