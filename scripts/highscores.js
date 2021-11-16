const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");
const playerHighscores = JSON.parse(localStorage.getItem("scores"));
const crown = document.querySelector(".fa-crown");
console.log(playerHighscores);


const displayScore = () => {
    let htmlTxt = `<i class="fas fa-crown hidden"></i>`;
    playerHighscores.sort((a,b) => b.score - a.score);
    playerHighscores.forEach(player => {
        htmlTxt += `
        <p>${player.name} ${player.score}</p>
        ` 
        console.log(player)
    });
    //   crown.style.visibility = "visible";
        highscoreTable.innerHTML = htmlTxt;

}
highScoreBtn.addEventListener("click", () => {
    highscoreTable.classList.toggle("hidden");
   // crown.classList.toggle("hidden");
    displayScore();
});

