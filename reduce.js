function fold(arr,f,acc) {
    let res = acc; 
    for (let i = 0; i < arr.length; i++) {
        res = f(res,arr[i]); 
    }
    return res; 
}

function foldRight(arr, f, acc) {
    let res = acc; 
    for (let i = arr.length-1; i >= 0; i--) {
        res = f(res,arr[i]); 
    }
    return res; 
}

function reduce(arr,f) {
    if (arr.length < 1) {
        throw "error"; 
    }
    let result = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        result = f(result,arr[i]); 
    }
    return result; 
}

function reduceRight(arr,f) {
    if (arr.length < 1) {
        throw "error"; 
    }
    let res = arr[arr.length - 1]; 
    for (let i = arr.length -2; i >= 0; i--) {
        res = f(res, arr[i]); 
    }
    return res; 
}  