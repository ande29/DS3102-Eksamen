const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");
const playerHighscores = JSON.parse(localStorage.getItem("users"));



const displayScore = () => {
    let htmlTxt = ``;

    playerHighscores.forEach(player => {
            
            htmlTxt += `
            <li class= "list">${player.name} ${player.score}</li>
            ` 
        });
        document.querySelector(".fa-crown").style.visibility = "visible";
        highscoreTable.innerHTML = htmlTxt;
}

highScoreBtn.addEventListener("click", displayScore);

