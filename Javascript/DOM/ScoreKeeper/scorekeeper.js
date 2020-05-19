var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

var winningscore = 5;

function reset(){
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;

    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");

    gameOver = false;
}

resetButton.addEventListener("click", function(){
    reset();
})

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningscore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }

})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningscore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;    
    }
})

numInput.addEventListener("change", function(){ //change event runs any time the value changes
    winningScoreDisplay.textContent  = numInput.value; //this.value - works as well
    winningscore = Number(numInput.value);
    reset();
});

