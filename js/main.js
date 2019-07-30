'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function writeThis (str, maxNumber) {
    for (let i=0; i<maxNumber; i++) {
        console.log(str);
    }
}

writeThis ('Patata', getRandomNumber(10));
writeThis ('Aguacate', getRandomNumber(30));
writeThis ('Pizza', getRandomNumber(50));
