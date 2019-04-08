let guesses = ["no money no love", "veni vidi vici", "no women no cry", "carpe diem", "no pain no gain", "i never lose either i win or i learn", "who dares wins"];

function getGuess() {
  let minimum = 0;
  let maximum = guesses.length - 1;
  let randomnumber =
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return guesses[randomnumber];
}

let guess = getGuess();
console.log(guess);
guess = guess.toUpperCase();

let guessLength = guess.length;
let wrongAnswers = 0;

let yesSound = new Audio("yes.wav");
let noSound = new Audio("no.wav");

let guess1 = "";

for (let i = 0; i < guessLength; i++) {
  if (guess.charAt(i) == " ") {
    guess1 = guess1 + " ";
  } else {
    guess1 = guess1 + "-";
  }
}

function typeEntry() {
  document.getElementById("input").innerHTML = guess1;
}

window.onload = start;

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function start() {
  let alphabetContent = "";

  for (let i = 0; i <= 25; i++) {
    let singleLetter = "let" + i;
    alphabetContent =
      alphabetContent +
      '<div class="letter" onclick="checkLetter(' +
      i +
      ')" id="' +
      singleLetter +
      '">' +
      letters[i] +
      "</div>";
  }

  document.getElementById("alphabet").innerHTML = alphabetContent;

  typeEntry();
}

String.prototype.insertChar = function(place, char) {
  if (place > this.length - 1) return this.toString();
  else return this.substr(0, place) + char + this.substr(place + 1);
};

function checkLetter(num) {
  let correctGuess = false;

  for (let i = 0; i < guessLength; i++) {
    if (guess.charAt(i) == letters[num]) {
      guess1 = guess1.insertChar(i, letters[num]);
      correctGuess = true;
    }
  }
  if (correctGuess == true) {
    yesSound.play();
    let singleLetter = "let" + num;
    document.getElementById(singleLetter).style.background = "#003300";
    document.getElementById(singleLetter).style.color = "#00C000";
    document.getElementById(singleLetter).style.border = "3px solid #00C000";
    document.getElementById(singleLetter).style.cursor = "default";

    typeEntry();
  } else {
    noSound.play();
    let singleLetter = "let" + num;
    document.getElementById(singleLetter).style.background = "#330000";
    document.getElementById(singleLetter).style.color = "#C00000";
    document.getElementById(singleLetter).style.border = "3px solid #C00000";
    document.getElementById(singleLetter).style.cursor = "default";
    document.getElementById(singleLetter).setAttribute("onclick", ";");

    wrongAnswers++;
    let pic = "img/s" + wrongAnswers + ".jpg";
    document.getElementById("gallows").innerHTML =
      '<img src="' + pic + '" alt="" />';
  }
  if (guess == guess1) {
    document.getElementById("alphabet").innerHTML =
      "Success!" +
      '<br /><br /><span class="reset" onclick="location.reload()">AGAIN?</span>';
  }
  if (wrongAnswers >= 9) {
    document.getElementById("alphabet").innerHTML =
      "Fail :-(" +
      '<br /><br /><span class="reset" onclick="location.reload()">AGAIN?</span>';
  }
}
