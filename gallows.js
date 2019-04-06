let guess = "no money no love";
guess = guess.toUpperCase();

let guessLength = guess.length;
let wrongAnswers = 0;

let guess1 = "";

for(let i = 0; i < guessLength; i++){
    if(guess.charAt(i)==" "){
        guess1 = guess1 + " ";
    } else {
        guess1 = guess1 + "-";
    } 
}

function typeEntry(){
    document.getElementById("input").innerHTML = guess1;
}

window.onload = start;

let letters = new Array(26);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";


function start(){
    let alphabetContent = "";

    for (let i = 0; i <= 25; i++){
        let singleLetter = "let" + i;
        alphabetContent = alphabetContent + '<div class="letter" onclick="checkLetter('+i+')" id="' + singleLetter + '">' + letters[i] + '</div>'
    }

    document.getElementById("alphabet").innerHTML = alphabetContent;

    typeEntry();
}

String.prototype.insertChar = function(place, char){
    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}

function checkLetter(num){

    let correctGuess = false;

    for(let i = 0; i<guessLength;i++){
        if (guess.charAt(i) == letters[num]){
            guess1 = guess1.insertChar(i,letters[num]);
            correctGuess = true;
        }

        if(correctGuess == true){
            let singleLetter = "let" + num;
            document.getElementById(singleLetter).style.background = "#003300";
            document.getElementById(singleLetter).style.color = "#00C000";
            document.getElementById(singleLetter).style.border = "3px solid #00C000";
            document.getElementById(singleLetter).style.cursor = "default";

            typeEntry();
        }
        else {
            let singleLetter = "let" + num;
            document.getElementById(singleLetter).style.background = "#330000";
            document.getElementById(singleLetter).style.color = "#C00000";
            document.getElementById(singleLetter).style.border = "3px solid #C00000";
            document.getElementById(singleLetter).style.cursor = "default";

            wrongAnswers++;
            let pic = "img/s" + wrongAnswers + ".jpg";
            console.log(wrongAnswers + "<- wrong answers");
            document.getElementById("gallows").innerHTML = '<img src="'+ pic +'" alt="" />';
        }
    }

}