var colors = [];
var pickedColor;
var numOfSq = 6;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var hardBtn = document.querySelector("#hard");


var h1 = document.querySelector("h1");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}


function reset() {
    colors = generateRandomColors(numOfSq);
    resetButton.textContent = "New Colors";
    pickedColor = colors[pickRandomColor()];
    colorDisplay.textContent = pickedColor;
    
    messageDisplay.textContent = "";
    for (let index = 0; index < squares.length; index++) {
        if(colors[index]) {
            squares[index].style.display = "block";
            squares[index].style.backgroundColor = colors[index];
        }
        else {
            squares[index].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});


function changeColors(color) {
    for (let i = 0; i <squares.length; i++) {
       squares[i].style.background = color
    }
}

function pickRandomColor() {
    return Math.floor(Math.random() * colors.length);
}

function generateRandomColors(length) {
    var arr = []
    for(let i = 0; i<length; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() *256);
    var green = Math.floor(Math.random() *256);
    var blue = Math.floor(Math.random() *256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}


function setupModeButtons () {
    for(let i =0; i<modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numOfSq = 3;
            }
            else {
                numOfSq = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (let index = 0; index < squares.length; index++) {
        squares[index].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again"
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}