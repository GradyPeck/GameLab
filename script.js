let userHealth = 40;
let grantHealth = 10;
let wonRounds = 0;
let userName = "user";

function begin() {
    if (confirm("Would you like to \"play\" something that almost, but not quite, resembles a game?")) {
        //txt = "Super duper!";
        userName = prompt("What the heck is your name, then?", "");

        if (userName == null || userName == "") {
            alert("Nice try. I'm calling you Namebert.");
            userName = "Namebert";
        }
        play();
    }
    else {
        //txt = "Bye then!";
    }
}

function play() {
    grantHealth = 10;
    while (userHealth > 0 && wonRounds < 3) {
        userHealth -= Math.round(Math.random()) + 1;
        grantHealth -= Math.round(Math.random()) + 1;
        console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);
        console.log(`${userName} has ${userHealth} health left.`);
        endRound();
    }
    endgame();
}

function endRound() {
    if (grantHealth <= 0) {
        wonRounds++;
        grantHealth = 10;
        console.log(`${userName} wins this round.`)
        if (wonRounds < 3) {
            console.log("Grant is regenerated by an unholy power!");
        }
    }
}

function endgame() {
    if (userHealth <= 0 && wonRounds >= 3) {
        console.log(`The noble ${userName} has defeated Grant, but paid the ultimate price.`);
    }
    else if (userHealth <= 0) {
        console.log(`${userName} has fallen. Grant's reign of darkness continues unabated!`);
    }
    else {
        console.log(`At long last, Grant is destroyed. ${userName} is victorious!`);
    }
}