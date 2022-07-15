//creates 2 variables for dice1 and dice2 that stores a random number between 1 and 6
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
//creates 2 variables for dice1 and dice2 that creates the file path that randomly selects images of dice between 1 and 6
const fileName1 = "images/dice" + randomNumber1 + ".png";
const fileName2 = "images/dice" + randomNumber2 + ".png";

// creates 2 variables to store the selectors for both dice images
const dice1 = document.querySelector(".img1")
const dice2 = document.querySelector(".img2")
// changes the src for both images to their respective fileNames
dice1.src = fileName1;
dice2.src = fileName2;


const winnerDisplay = document.querySelector(".container h1");

if(randomNumber1 > randomNumber2) {
    winnerDisplay.style.color = "red";
    winnerDisplay.innerHTML = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    winnerDisplay.style.color = "green";
    winnerDisplay.innerHTML = "Player 2 Wins";
}
else {
    winnerDisplay.innerHTML = "Draw!";
}




