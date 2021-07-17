

let square = document.getElementById("theSquare");

const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight||
document.body.clientHeight;

let randomPixels;
let result = document.getElementById('output');
let realLength = document.getElementById('length');
let hintField = document.getElementById('hint');
let pointDisplay = document.getElementById('points');
var pointCount = 0;
let guess = document.getElementById("guessField");
let submitBtn = document.getElementById('submitGuess');
let newOne = document.getElementById('newBar');

function getNewBar() {
  randomPixels = Math.floor(Math.random() * width);
  square.style.width = randomPixels + "px";
  guess.disabled = false;
  submitBtn.disabled = false;
  realLength.style.display = "none";
  result.style.display = "none";
  guess.value = "";
  newOne.style.display = "none";
}

function getInputValue(){
        // Selecting the input element and get its value
        let inputVal = guess.value;
        let difference = Math.abs(inputVal-randomPixels);
        realLength.style.display = "block";
        result.style.display = "block";
        newOne.style.display = "block";
        realLength.innerHTML = 'length: ' + randomPixels;
        guess.disabled = true;
        submitBtn.disabled = true;


        if (inputVal == randomPixels) {
          result.innerHTML = 'WOW! you are genius! you gain 50 points + 50 bonus points!';
          updatePoints(difference-50);

        } else if ((difference<50)) {
          realLength.innerHTML = 'length: ' + randomPixels;
          result.innerHTML = 'so close! you tried really hard, so you got ' + (50-difference) + ' points';
          updatePoints(difference);

        } else {
          result.innerHTML ='not bad...<br> well, actually it was bad. <br> i had to subtract ' + (50-difference) + ' points.';
          updatePoints(difference);

        }
    }

function getHint() {
  hintField.innerHTML = 'your screen is ' + width + ' pixel wide.';
  let hintBtn = document.getElementById('getHintBtn');
  hintBtn.style.display = 'none';
}

function updatePoints(pointDifference) {
  pointCount = pointCount + (50-pointDifference);
  pointDisplay.innerHTML = 'your points: ' + pointCount;
}


getNewBar();

console.log("dear nerd. i know you are here to check the width of the div. why don't you just enjoy the game without cheating? ;-) ");
