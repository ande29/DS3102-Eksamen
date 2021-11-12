const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");

const highscores = JSON.parse(localStorage.getItem("users"));
console.log(highscores)


const displayScore = () => {
    let htmlTxt = ``;
    highscores.forEach(name => {
        console.log(name.name)
        htmlTxt += `
            <li style="list-style:number">${name.name}</li>
       ` 
    });
    document.querySelector(".fa-crown").style.visibility = "visible";
    highscoreTable.innerHTML = htmlTxt;
}

highScoreBtn.addEventListener("click", displayScore);