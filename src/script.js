"use strict";

// TODO - write your code here.

const randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function(health) {
    const injured = health - randomDamage();
    return injured;
};

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

function fight(player1, player2, player1health, player2health) {
    while (true) {
        const attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2health = attackPlayer(player2health);
            logHealth(player2, player2health);
            if (isDead(player2health) === true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1health = attackPlayer(player1health);
            logHealth(player1, player1health);
            if (isDead(player1health) === true) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("Aragorn", "Nazgul", 100, 100);

//extended challenges

printSquare(3);
function printSquare(width) {
    var character = "#";
    var charLine;
    for (charLine = 0; charLine < width; charLine++) {
        console.log(character.repeat(width));
    }
}