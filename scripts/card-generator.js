import PremierLeagueModule from "./modules/PremierLeagueModule.js"
import athletesArray from "./athletesInformation.js";

// Html elements

const contentOutput = document.querySelector(".content-output");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";
const selectInput = document.querySelector("#filter-select");
const searchBar = document.querySelector("#search-bar");

// arrays

let premierLeagueArray = PremierLeagueModule.getAllClubs();

// Searchbar function

const searchFunction = (cards, color) => {
    searchBar.addEventListener("keyup", (e) => {
        const searchInput = e.target.value.toLowerCase();
        let searchResult = cards.filter( card => {
                return (
                    card.name.toLowerCase().includes(searchInput) || 
                    card.city.toLowerCase().includes(searchInput) 
                    );
            });
            displayCards(searchResult, color);
    });
}

// Filter selection
const filterSelection = (cards, color) => {
    selectInput.addEventListener("input", () => {
        let inputValue = selectInput.value;
        let output;

        // vunnet ligaen
        if(inputValue === "Vunnet Premier League"){
            output = cards.filter(card => {
                card = (card.titles > 0);
                return card;
            })
        } 
        // ikke vunnet ligaen
        if(inputValue === "Ikke vunnet Premier League"){
            output = cards.filter(card => {
                card = (card.titles < 1);
                return card;
            })
        } 
        // A-Z
        else if(inputValue === "Navn (A-Z)"){
            output = cards.sort((a,b) => a.name > b.name ? 1 : -1)
        }
        // Z-A
        else if(inputValue === "Navn (Z-A)"){
            output = cards.sort((a,b) => a.name < b.name ? 1 : -1)
        }
        // Lav til høy
        else if(inputValue === "Alder (lav-høy)"){
            output = cards.sort((a,b) => a.age > b.age ? 1 : -1)
        }
        // høy til lav
        else if(inputValue === "Alder (høy-lav)"){
            output = cards.sort((a,b) => a.age < b.age ? 1 : -1)
        }
        searchBar.value = "";
        displayCards(output, color);
    })
}

// card generation

const generateCards = (theme) => {
    switch(theme){
        case "premier-league":
            displayCards(premierLeagueArray, primary);
            searchFunction(premierLeagueArray, primary);
            filterSelection(premierLeagueArray, primary);
            searchBar.placeholder = "Søk etter klubb eller by...";
            break;

        case "norwegian-athletes": 
            displayCards(athletesArray, secondary);
            searchFunction(athletesArray, secondary);
            filterSelection(athletesArray, secondary);
            searchBar.placeholder = "Søk etter utøver eller idrett...";
            break;
    }
}

// Display cards

const displayCards = (cards, color) => {
    const htmlTxt = cards.map((card) => {
            return `
            <card-item
            name="${card.name}"
            imgUrl="card-logos/${card.img}"
            imgAlt="${card.name} logo"
            background="${color}"
            ></card-item>
            `;
        })
        contentOutput.innerHTML = htmlTxt;
}




export default generateCards;