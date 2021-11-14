const highscoreTable = document.querySelector(".highscore-output");
const highScoreBtn = document.querySelector(".highscore-btn");

const highscores = JSON.parse(localStorage.getItem("users"));
console.log(highscores)


const displayScore = () => {
    let htmlTxt = ``;
        highscores.forEach(name => {
            console.log(name.name)
            htmlTxt += `
                <li>${name.name}</li>
           ` 
        });
        document.querySelector(".fa-crown").style.visibility = "visible";
        highscoreTable.innerHTML = htmlTxt;
}

const findPlayer = () => {
    let playerName = JSON.parse(localStorage.getItem("users"));
    let player = [...playerName.slice(-1)]
    
    player.forEach(name => {
        let play = name.name
        console.log(play)
    })
    console.log( player)
}
highScoreBtn.addEventListener("click", displayScore);