import PremierLeagueModule from "./modules/PremierLeagueModule.js"
import athletesArray from "./athletesInformation.js";

const contentOutput = document.querySelector(".content-output");
const primary = "linear-gradient(to bottom, #333399, #37003A);";
const secondary = "linear-gradient(to bottom, #4286f4, #373B44);";


/*
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
*/

const generateCards = (theme) => {
    let htmlTxt = "";
    
    if(theme === "premier-league"){
        PremierLeagueModule.getAllClubs().forEach( club => {
            htmlTxt += generateHtml(club.name, "premier-league/logo/" + club.logo, primary);
        })
        contentOutput.innerHTML = htmlTxt;
    }
    else if(theme === "norwegian-athletes"){
        athletesArray.forEach(athlete => {
            htmlTxt += generateHtml(athlete.name, "norwegian-athletes/" + athlete.img, secondary)
        })
        contentOutput.innerHTML = htmlTxt;
    }
}

const generateHtml = (name, img, bg) => {
    let txt = "";
    txt = `<card-item
    name="${name}"
    imgUrl="${img}"
    imgAlt="${name} logo"
    background="${bg}"
    ></card-item>
    `;

    return txt;
}



export default generateCards;