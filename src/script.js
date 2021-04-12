"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return (randNum === 0) ? "True" : "False";
}

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}

//open spec and run html in browser to show tests