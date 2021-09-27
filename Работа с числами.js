console.log(Math.PI.toFixed(2));

console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));

console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

console.log(Math.random().toFixed(2));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(10,20));

var value = 0.6 + 0.7;
console.log(value.toFixed(1));

console.log(parseInt('100$'))