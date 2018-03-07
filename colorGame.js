//alert("Connected");
var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square")
var pickedColor ;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //Mode Buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent ==="Easy"? numSquares=3 :numSquares=6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i =0;i<squares.length;i++){
   
        //Add event listeners
        squares[i].addEventListener("click",function(){
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i=0;i<squares.length;i++){
       if(colors[i]){
           squares[i].style.display = "block";
           squares[i].style.backgroundColor = colors[i];
       }
       else{
           squares[i].style.display = "none";
       }
    }
    h1.style.backgroundColor = "steelblue";

}
resetButton.addEventListener("click", function(){
    //generate all new colors
    reset();
});

function changeColors(color){
    //loop through all squares and match color
    for(var i =0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num colors to array
    for(var i =0;i<num;i++){
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var r =  Math.floor(Math.random()*256)
    //pick a green from 0 to 255
    var g =  Math.floor(Math.random()*256)
    //pick a blue from 0 to 255
    var b =  Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}