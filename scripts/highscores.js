+const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");

const highscores = JSON.parse(localStorage.getItem("users"));
console.log(highscores)

console.log(leaderBoard)

const displayScore = () => {
    let htmlTxt = ``;
    highscores.forEach(name => {
        console.log(name.name)
        htmlTxt += `
            <li>${name.name}</li>
        `
    });
    highscoreTable.innerHTML = htmlTxt;
}

highScoreBtn.addEventListener("click", displayScore);