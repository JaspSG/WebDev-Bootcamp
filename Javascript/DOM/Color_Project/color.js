var numSquares = 6;
var pickedColor;
// var colors = generateRandomColors(numSquares);
var colors = [];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Background = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //set up mode button listeners
  setUpModeButtons();
  setupSquares();
  reset();
}

function setUpModeButtons() {
  for (i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      //figure out how many squares to show
      // Alternate code to the if/else (similiar to verilog)
      // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      if (this.textContent === "EASY") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      //console.log(clickedColor, pickedColor);
      //Logic for right and wrong answers
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent = "Play Again?";
        h1Background.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = ansColor();
  //change colorDIsplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "NEW COLORS";
  messageDisplay.textContent = "";

  //change colore of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1Background.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function () {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = ansColor();
//   colorDisplay.textContent = pickedColor;

//   for (i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function () {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = ansColor();
//   colorDisplay.textContent = pickedColor;

//   for (i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  //loop all squares
  for (i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function ansColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //add num random colors to array
  for (i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //Generate random number up to 255
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //call function in console to test
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
