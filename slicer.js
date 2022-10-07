function slice(arr, start, end) {
    let result = [];
    if (end==undefined) {
        end = arr.length
    } 
    if (start < 0) {
        start = arr.length + start
    } 
    if (end < 0 ) {
        end = arr.length + end
    }
    for(let i = start; i<end; i++) {
        result.push(arr[i]);
    }
    if (typeof arr == "string"){
        return result.join("");
    } else {
        return result; 
    }
}



