const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");
const playerHighscores = JSON.parse(localStorage.getItem("scores"));
const crown = document.querySelector(".fa-crown");

const displayScore = () => {
    let htmlTxt = `<i class="fas fa-crown hidden"></i>`;

    playerHighscores.sort((a,b) => b.score - a.score);
    playerHighscores.forEach(player => {
        htmlTxt += `
            <h4>${player.name} - ${player.score} pts</h4>` 
})
        highscoreTable.innerHTML = htmlTxt;
}

highScoreBtn.addEventListener("click", () => {
    highscoreTable.classList.toggle("hidden");
    displayScore();
    gsap.timeline()
        .from(".highscore-output", {duration: 1, opacity: 0})
        .from(".fa-crown", {opacity: 0, scale:0, ease:"back"})
        .from("h4", {y:1000, opacity:0, stagger: 0.5, duration: 1, ease:"Power"})
});

