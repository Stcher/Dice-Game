if (window.performance.navigation.type === 1) {
    // if the page has been refreshed, call the rollDice() function.
   rollDice();
 }
function rollDice() {
    let dice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
    var randomNumDice1 = Math.floor(Math.random() * dice.length);
    var randomNumDice2 = Math.floor(Math.random() * dice.length);
    function choosePic() {
        document.getElementById("img1").src = dice[randomNumDice1];
        document.getElementById("img2").src = dice[randomNumDice2];
    }

    // when page was refeshed, roll dice and get a random img from it
    window.onload = function() {
        if (location.reload) {
            choosePic();
        }
    }

    // When user press any key, update the whole page
    document.addEventListener("keydown", function() {
        refreshPage();
    })

    function refreshPage(){
        window.location.reload();
    } 

    // Check which player win or draw
    if (randomNumDice1 > randomNumDice2) {
        document.querySelector("h1").innerHTML="Player 1 Win!";
    } else if (randomNumDice2 > randomNumDice1) {
        document.querySelector("h1").innerHTML="Player 2 Win!";
        } else {
            document.querySelector("h1").innerHTML="Draw!";
        };
    
}




