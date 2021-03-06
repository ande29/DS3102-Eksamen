import generateCards from "../card-generator.js";
import selectOptions from "../filter.js";
import getTheme from "../quizGenerator.js";

// variables
const bannerContainer = document.querySelector(".banner-container");
const contentHeader = document.querySelector(".content-header");
const activeWindow = window.document.title;

// Functions

const toggleClass = (tab, tabs, theme) => {
    if(theme){
        tabs.forEach(tab => {
            tab.classList.remove("active-tab");
        })
    }
    tab.classList.add("active-tab");
    
    if(activeWindow === "Home"){
        generateCards(theme);
        selectOptions(theme);
        contentHeader.style.display = "block";   
    } 
    if(activeWindow === "Quiz"){
        getTheme(theme);
    }
    generateBanner(theme);
    
}

const generateBanner = (theme) => {
    let htmlTxt = "";  

    htmlTxt = `
    <banner-img
    imgUrl = "${theme}-banner.jpeg"
    ></banner-img>
    `;
    bannerContainer.innerHTML = htmlTxt;
}



const tabsTemplate = document.createElement("template")

tabsTemplate.innerHTML = `
    <style>
        .content-tabs{
        display: flex;
        justify-content: center;
        background-color: rgb(55, 0, 58);
        height: 50px;
        width: 100%;
        margin-bottom: 30px;
        box-shadow: 1px 3px 10px 0px rgba(55,0,58,0.75);
        }
        .tabs{
            width: 50%;
            background-color: rgb(55, 0, 58);
            border: none;
            padding: 10px 5px;
            color: #999;
        } 
        #pl-tab{
            border-right: 1px solid rgba(255,255,255,.5);
        }
        .tabs:hover{
            background-color: rgba(255, 255, 255, .1);
            color: #fff;
            cursor: pointer;
        }
        .active-tab{
            color: #eee;
            background-color: rgba(255, 255, 255, .1);
            border-top: 1px solid rgba(255,255,255,.5);
        }
    </style>

    <nav class="content-tabs">
        <input data-theme="premier-league"
                type="button" 
                name="premier-league" 
                class="tabs" 
                id="pl-tab" 
                value="Premier League">

        <input data-theme="norwegian-athletes"
                type="button" 
                name="norwegian-athletes" 
                class="tabs" 
                id="athlete-tab" 
                value="Norske Idrettsut??vere">
    </nav>
`;


class Tabs extends HTMLElement {
    constructor() {
        super()

        this.appendChild(tabsTemplate.content.cloneNode(true))

        const tabs = this.querySelectorAll(".tabs")
        tabs.forEach(tab => {
            const theme = tab.dataset.theme;
            tab.addEventListener("click", () => {
                toggleClass(tab, tabs, theme);
            })
        })
    }
}

window.customElements.define("content-tabs", Tabs)