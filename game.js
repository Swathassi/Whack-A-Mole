window.onload = function() {
    setGame();
}



function startGame(){
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display =  "none";
    startGame();
}

function gameOver(){
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display =  "block";

    reset();
    clearInterval(loop);
}