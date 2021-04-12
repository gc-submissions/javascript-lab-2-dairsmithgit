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



//open spec and run html in browser to show tests
