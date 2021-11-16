const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");
const playerHighscores = JSON.parse(localStorage.getItem("users"));
const crown = document.querySelector(".fa-crown");


const displayScore = () => {
    let htmlTxt = `<i class="fas fa-crown hidden"></i>`;

    playerHighscores.forEach(player => {
            
            htmlTxt += `
            <p>${player.name} ${player.score}</p>
            ` 
        });
     //   crown.style.visibility = "visible";
        highscoreTable.innerHTML = htmlTxt;

}

highScoreBtn.addEventListener("click", () => {
    highscoreTable.classList.toggle("hidden");
   // crown.classList.toggle("hidden");
    displayScore();
});

