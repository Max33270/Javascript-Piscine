function every(arr,f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) == false) {
            return false; 
        }
    }
    return true; 
}

function some(arr,f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) == true) {
            return true; 
        }
    }
    return false; 
}

function none(arr,f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) == true) {
            return false; 
        }
    }
    return true; 
}
