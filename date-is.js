function isValid(date) {
    if (typeof date == 'number' && !isNaN(date)) {
        date = new Date(date); 
    }
    if (date instanceof Date && !isNaN(date) || date === Date.now()) {
        return true;
    }
    return false;
}

function isAfter(d1,d2) {
    if (new Date(d1) > new Date(d2)) {
        return true; 
    }
    return false; 
}

function isBefore(d1,d2) {
    if (new Date(d1) < new Date(d2)) {
        return true; 
    }
    return false; 
}

function isFuture(d) {
    const c = new Date(); 
    if (isValid(d) && d > c) {
        return true;
    }
    return false; 
}

function isPast(d) {
    const c = new Date(); 
    if (isValid(d) && d < c) {
        return true;
    }
    return false; 
}
