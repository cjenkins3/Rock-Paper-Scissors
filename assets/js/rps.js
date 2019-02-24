
var userScore = 0;
var computerScore = 0;
//dom variables -- in span tags (html)
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBorad_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

//this function picks r,p,s at random
function getComputerChoice() {
    var choices = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//converts single letters to full words
function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    // console.log("WIN");
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var smallUserWord = "[user]".fontsize(6).sup().fontcolor("yellow");
    var smallCompWord = "[comp]".fontsize(6).sup().fontcolor("yellow");
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! `;
}

function lose(userChoice, computerChoice) {
    // console.log("LOST");
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var smallUserWord = "[user]".fontsize(6).sup().fontcolor("yellow");
    var smallCompWord = "[comp]".fontsize(6).sup().fontcolor("yellow");
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
}

function draw(userChoice, computerChoice) {
    // console.log("DRAW");
    var smallUserWord = "[user]".fontsize(6).sup().fontcolor("yellow");
    var smallCompWord = "[comp]".fontsize(6).sup().fontcolor("yellow");
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. `;
}
//Determins who wins - computer vs user
function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        // console.log("USER WINS");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        // console.log("USER LOSES");
            break;    
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        // console.log("It's a Draw!");
            break;
    }
}


//clicking the images determins the id (HTML) based off the variables/div above.
function main() {
    rock_div.addEventListener("click", function() {
    game("r");
    })
    paper_div.addEventListener("click", function() {
    game("p");
    })
    scissors_div.addEventListener("click", function() {
    game("s");
    })
}

main();