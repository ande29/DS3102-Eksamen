import PremierLeagueModule from "./modules/PremierLeagueModule.js"
import athletesInformation from "./athletesInformation.js";

// Html elements

const contentOutput = document.querySelector("#content-output");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";
const selectInput = document.querySelector("#filter-select");
const searchBar = document.querySelector("#search-bar");


// arrays

const premierLeague = PremierLeagueModule.getAllClubs();
const athletes = athletesInformation.athletesArray;



// Searchbar function

const searchFunction = (cards, color, theme) => {
    searchBar.addEventListener("keyup", (e) => {
        const searchInput = e.target.value.toLowerCase();
        let searchResult = cards.filter( card => {
                return (
                    card.name.toLowerCase().includes(searchInput) || 
                    card.city.toLowerCase().includes(searchInput) 
                    );
            });
            displayCards(searchResult, color, theme);
            flipCards();
    });
}

// Filter selection
const filterSelection = (cards, color, theme) => {
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
        else if(inputValue === "Ikke vunnet Premier League"){
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
        displayCards(output, color, theme);
        flipCards();
    })
}




// Display cards

const displayCards = (cards, color, theme) => {
    const htmlTxt = cards.map((card) => {
        let hasWon = card.titles > 0 ? `har vunnet ligaen ${card.titles} gang(er)` : "har aldri vunnet ligaen";

        let plBio = `
        ${card.name} er en engelsk fotballklubb fra byen ${card.city} som ble stiftet i ${card.founded}.
        ${card.name} spiller sine hjemmekamper på ærverdige ${card.stadium} og ${hasWon}.
        Deres nåværende manager er ${card.manager}.`;


        
        return `
        <card-item
        name="${card.name}"
        imgUrl="card-logos/${card.img}"
        imgAlt="${card.name} logo"
        background="${color}"
        bio="${theme === "premier-league" ? plBio : card.bio}"
        ></card-item>
        `;
    })
    .join('');
    
    contentOutput.innerHTML = htmlTxt;
}

// flip cards

const flipCards = () => {
    let cards = document.querySelectorAll(".inside");

    cards.forEach(card => {
        card.addEventListener("click", () =>{
            card.classList.toggle("flipped");
        })
    })
}

// load cards

const generateCards = (theme) => {
    switch(theme){
        case "premier-league":
            displayCards(premierLeague, primary, theme);
            searchFunction(premierLeague, primary, theme);
            filterSelection(premierLeague, primary, theme);
            searchBar.placeholder = "Søk etter klubb eller by...";
            flipCards();
            break;
            
            case "norwegian-athletes": 
            displayCards(athletes, secondary, theme);
            searchFunction(athletes, secondary);
            filterSelection(athletes, secondary, theme);
            searchBar.placeholder = "Søk etter utøver eller idrett...";
            flipCards();
            break;
        }
    }


export default generateCards;