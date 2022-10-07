const isBelowThreshold = (currentValue) => currentValue.length >= 5;
const isNoThreshold = (currentValue) => currentValue.length >= 7;
const isOverThreshold = (currentValue) => currentValue.length >= 10;

function longWords(arr) {
    return arr.every(isBelowThreshold); 
}

function oneLongWord(arr) {
    return arr.some(isOverThreshold); 
}

function noLongWords(arr) {
    return !(arr.some(isNoThreshold)); 
}