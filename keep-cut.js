function cutFirst(str1) {
    return str1.slice(2); 
}

function cutLast(str1) {
    return str1.slice(0, -2); 
}

function cutFirstLast(str1) {
    return str1.slice(2, -2); 
}

function keepFirst(str1) {
    return str1.slice(0, 2);
}

function keepLast(str1) {    
    return str1.slice(-2, str1.length);
}

function keepFirstLast(str1) {
    if (str1.length <= 3) {
        return str1;
    } else {
        return keepFirst(str1) + keepLast(str1);
    }
}
