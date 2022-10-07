function words(string1) {
    return string1.split(" ");
}

function sentence(arr1) {
    return arr1.join(' ');
}

function yell(string1) {
    return string1.toUpperCase();
}

function whisper(string1) {
    return "*" + string1.toLowerCase() + "*";
}

function capitalize(string1) {
    return string1[0].toUpperCase() + string1.slice(1).toLowerCase()
}
