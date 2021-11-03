import PremierLeagueModule from "./modules/PremierLeagueModule.js"
import athletesArray from "./athletesInformation.js";

const contentOutput = document.querySelector(".content-output");
const primary = "rgb(55, 0, 58)";
const secondary = "rgb(34, 33, 169)";

const generateHtml = (theme) => {
    let htmlTxt = "";
    contentOutput.innerHTML = htmlTxt;

    if(theme === "premier-league"){
        PremierLeagueModule.getAllClubs().forEach( club => {
            htmlTxt += `
            <card-item
            name="${club.name}"
            imgUrl="premier-league/logo/${club.logo}"
            imgAlt="${club.name} logo"
            background="${primary}"
        ></card-item>
            `;
            
            contentOutput.innerHTML = htmlTxt;
        })
    }
    else if(theme === "norwegian-athletes"){
        athletesArray.forEach(athlete => {
            htmlTxt += `
            <card-item
            name="${athlete.name}"
            imgUrl="/norwegian-athletes/${athlete.img}"
            imgAlt="Image of ${athlete.name}"
            background="${secondary}"
        ></card-item>
            `;

        })
        contentOutput.innerHTML = htmlTxt;
    }
}



export default generateHtml;